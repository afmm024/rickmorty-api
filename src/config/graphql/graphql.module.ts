import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CharacterModule } from 'src/modules/character/character.module';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            playground: true, // Set to false in production. It enables the GraphQL Playground where you can test your queries.
            typePaths: ['./**/*.graphql'], //
            
        }),
        CharacterModule
    ],
})
export class GraphqlModule { }
