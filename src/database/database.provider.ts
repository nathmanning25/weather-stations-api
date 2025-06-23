import {DataSource} from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.NODE_ENV === 'docker' ? 'db' : 'localhost',
        port: 5432,
        username: 'weather_user',
        password: 'weather_pass',
        database: 'weather_db',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
      });
      return dataSource.initialize();
    },
  },
];
