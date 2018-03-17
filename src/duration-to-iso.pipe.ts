import { Pipe, PipeTransform } from '@angular/core';
import { Duration } from 'luxon';

@Pipe({ name: 'aldToISO' })
export class DurationToISOPipe implements PipeTransform {
  transform(value: Duration): string {
    return value.toISO();
  }
}