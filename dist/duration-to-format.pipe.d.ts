import { PipeTransform } from '@angular/core';
import { Duration } from 'luxon';
export declare class DurationToFormatPipe implements PipeTransform {
    transform(value: Duration, format: string, opts?: object): string;
}
