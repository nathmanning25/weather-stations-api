import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import {WeatherStation} from './weather-station.entity';

@Entity('measurements')
export class Measurement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'weather_station_id', type: 'integer'})
  weatherStationId: number;

  @Column({type: 'varchar', length: 50})
  variable_name: string;

  @Column({type: 'double precision'})
  value: number;

  @Column({type: 'timestamp'})
  timestamp: Date;

  @ManyToOne(
    () => WeatherStation,
    (weatherStation) => weatherStation.measurements,
  )
  @JoinColumn({name: 'weather_station_id'})
  weatherStation: WeatherStation;
}
