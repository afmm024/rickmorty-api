import { QueryInterface } from 'sequelize';
import { fetchData } from '../../common/utils/fetch-data';
import { CharacterResponse} from '../interfaces';
import { CharacterDTO } from '../dto/character.dto';

export = {
  async up(queryInterface: QueryInterface) {
    try {
      const charactersDTO: CharacterDTO[] = []
      const responseCharacter = await fetchData<CharacterResponse>('https://rickandmortyapi.com/api/character')

      responseCharacter.map(async character => {
        charactersDTO.push({
          id: character.id,
          name: character.name,
          gender: character.gender,
          status: character.status,
          image: character.image,
          species: character.species,
          type: character.type,
          url: character.url,
          created: character.created
        })
      });

      await queryInterface.bulkInsert('Characters', charactersDTO);

      if (charactersDTO) {
        console.log('✅ Characters filling successfully.');
      }

    } catch (error) {
      console.log(error)
      console.log('❌ Characters filling failed.')
    }
  },

  async down(queryInterface: QueryInterface) {

  },
};