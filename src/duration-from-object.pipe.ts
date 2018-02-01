import { Pipe, PipeTransform } from '@angular/core';
import { Duration } from 'luxon';

@Pipe({ name: 'aldFromObject' })
export class DurationFromObjectPipe implements PipeTransform {
  transform(value: object): Duration {
    return Duration.fromObject(value);
  }
}