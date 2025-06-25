import {Controller, Get, Param, ParseIntPipe, Query} from '@nestjs/common';
import {WeatherStationsService} from './weather-stations.service';
import {WeatherStation} from './entities/weather-station.entity';

@Controller('weather-stations')
export class WeatherStationsController {
  constructor(
    private readonly weatherStationsService: WeatherStationsService,
  ) {}

  @Get()
  async findAll(@Query('state') state?: string): Promise<WeatherStation[]> {
    return state
      ? this.weatherStationsService.findByState(state)
      : this.weatherStationsService.findAll();
  }

  @Get('states/all')
  async findAllStates(): Promise<string[]> {
    return this.weatherStationsService.findAllStates();
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<WeatherStation> {
    return this.weatherStationsService.findOne(id);
  }
}
