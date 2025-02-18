import { QueryInterface } from 'sequelize';
import { fetchData } from '../../common/utils/fetch-data';
import { LocationResponse } from '../interfaces';
import { LocationDTO } from '../dto/location.dto';

export = {
  async up(queryInterface: QueryInterface) {
    try {
      const locationsDTO: LocationDTO[] = []
      const responseLocation = await fetchData<LocationResponse>('https://rickandmortyapi.com/api/location')

      responseLocation.map(async location => {
        locationsDTO.push({
          id: location.id,
          name: location.name,
          type: location.type,
          dimension: location.dimension
        })
      });

      await queryInterface.bulkInsert('Locations', locationsDTO)
    
      if (locationsDTO) {
        console.log('✅ Location filling successfully.')
      }
    } catch (error) {
      console.log(error)
      console.log('❌ Location filling failed.')
    }
  },

  async down(queryInterface: QueryInterface) {

  },
};