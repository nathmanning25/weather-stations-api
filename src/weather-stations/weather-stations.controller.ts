import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { WeatherStationsService } from './weather-stations.service';
import { WeatherStation } from './entities/weather-station.entity';

@Controller('weather-stations')
export class WeatherStationsController {
  constructor(
    private readonly weatherStationsService: WeatherStationsService,
  ) {}

  @Get()
  async findAll(): Promise<WeatherStation[]> {
    return this.weatherStationsService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<WeatherStation> {
    return this.weatherStationsService.findOne(id);
  }
}
