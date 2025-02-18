import { QueryInterface } from 'sequelize';
import { fetchData } from '../../common/utils/fetch-data';
import { EpisodeResponse } from '../interfaces';
import { EpisodeDTO } from '../dto/episode.dto';

export = {
  async up(queryInterface: QueryInterface) {
    try {
      const episodesDTO: EpisodeDTO[] = []
      const responseEpisode = await fetchData<EpisodeResponse>('https://rickandmortyapi.com/api/episode')

      responseEpisode.map(async episode => {
        episodesDTO.push({
          id: episode.id,
          name: episode.name,
          air_date: episode.air_date,
          episode: episode.episode,
        })
      });

      await queryInterface.bulkInsert('Episodes', episodesDTO)

      if (episodesDTO) {
        console.log('✅ Episodes filling successfully.')
      }
    } catch (error) {
      console.log(error)
      console.log('❌ Episodes filling failed.')
    }
  },

  async down(queryInterface: QueryInterface) {

  },
};