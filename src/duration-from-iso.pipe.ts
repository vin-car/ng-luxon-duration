import { Pipe, PipeTransform } from '@angular/core';
import { Duration } from 'luxon';

@Pipe({ name: 'aldFromISO' })
export class DurationFromISOPipe implements PipeTransform {
  transform(value: string, opts?: object): Duration {
    return Duration.fromISO(value, opts);
  }
}