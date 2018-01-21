import { Pipe, PipeTransform } from '@angular/core';
import { Duration } from 'luxon';

@Pipe({ name: 'aldToFormat' })
export class DurationToFormatPipe implements PipeTransform {
  transform(value: Duration, format: string, opts?: object): string {
    return value.toFormat(format, opts);
  }
}