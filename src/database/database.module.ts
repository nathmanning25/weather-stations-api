import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {databaseProviders} from './database.provider';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({}),
      dataSourceFactory: async () => {
        const dataSource = await databaseProviders[0].useFactory();
        return dataSource;
      },
    }),
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
