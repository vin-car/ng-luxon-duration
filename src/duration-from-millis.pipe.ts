import { Pipe, PipeTransform } from '@angular/core';
import { Duration } from 'luxon';

@Pipe({ name: 'aldFromMillis' })
export class DurationFromMillisPipe implements PipeTransform {
  transform(value: number, opts?: object): Duration {
    return Duration.fromMillis(value, opts);
  }
}