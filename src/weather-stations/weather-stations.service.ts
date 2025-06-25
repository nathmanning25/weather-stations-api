import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {WeatherStation} from './entities/weather-station.entity';

@Injectable()
export class WeatherStationsService {
  constructor(
    @InjectRepository(WeatherStation)
    private readonly weatherStationRepository: Repository<WeatherStation>,
  ) {}

  async findByState(state: string): Promise<WeatherStation[]> {
    return this.weatherStationRepository.find({
      where: {state},
      relations: ['measurements'],
    });
  }

  async findOne(id: number): Promise<WeatherStation> {
    const weatherStation = await this.weatherStationRepository.findOne({
      where: {id},
      relations: ['measurements'],
    });
    if (!weatherStation) {
      throw new NotFoundException(`Weather station with ID ${id} not found`);
    }
    return weatherStation;
  }

  async findAll(): Promise<WeatherStation[]> {
    const weatherStations = await this.weatherStationRepository.find({
      relations: ['measurements'],
    });
    return weatherStations;
  }

  async findAllStates(): Promise<string[]> {
    const result = await this.weatherStationRepository
      .createQueryBuilder('weatherStation')
      .select('DISTINCT weatherStation.state', 'state')
      .getRawMany<{state: string}>();
    return result.map((row) => row.state).sort();
  }
}
