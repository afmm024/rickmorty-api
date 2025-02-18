import { Module } from '@nestjs/common';
import { SequelizeMModule } from './config/sequelize/sequelize.module';
import { GraphqlModule } from './config/graphql/graphql.module';

@Module({
  imports: [SequelizeMModule, GraphqlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
