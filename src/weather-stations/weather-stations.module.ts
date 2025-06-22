import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeatherStationsService } from './weather-stations.service';
import { WeatherStationsController } from './weather-stations.controller';
import { WeatherStation } from './entities/weather-station.entity';
import { Measurement } from './entities/measurement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WeatherStation, Measurement])],
  controllers: [WeatherStationsController],
  providers: [WeatherStationsService],
})
export class WeatherStationsModule {}
