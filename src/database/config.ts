import { Dialect } from 'sequelize';

interface ISequelizeConfig {
  [key: string]: {
    dialect: Dialect;
    host: string,
    port: number,
    username: string,
    password: string,

  };
}

const config: ISequelizeConfig = {
  development: {
    dialect: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'fhmhKIJzrfkhhlp2',
  },
  test: {
    dialect: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'fhmhKIJzrfkhhlp2',
  },
  production: {
    dialect: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'fhmhKIJzrfkhhlp2',
  },
};

export = config;