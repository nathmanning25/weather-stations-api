import {Module} from '@nestjs/common';
import {DatabaseModule} from './database/database.module';
import {WeatherStationsModule} from './weather-stations/weather-stations.module';

@Module({
  imports: [DatabaseModule, WeatherStationsModule],
})
export class AppModule {}
