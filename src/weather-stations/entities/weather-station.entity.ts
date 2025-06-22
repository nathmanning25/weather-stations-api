import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Measurement } from './measurement.entity';

@Entity('weather_stations')
export class WeatherStation {
  @PrimaryColumn({ type: 'integer' })
  id: number;

  @Column({ name: 'ws_name', type: 'varchar', length: 255 })
  wsName: string;

  @Column({ type: 'varchar', length: 255 })
  site: string;

  @Column({ type: 'varchar', length: 255 })
  portfolio: string;

  @Column({ type: 'varchar', length: 3 })
  state: string;

  @Column({ type: 'double precision' })
  latitude: number;

  @Column({ type: 'double precision' })
  longitude: number;

  @OneToMany(() => Measurement, (measurement) => measurement.weatherStation)
  measurements: Measurement[];
}
