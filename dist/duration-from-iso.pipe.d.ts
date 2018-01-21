import { PipeTransform } from '@angular/core';
import { Duration } from 'luxon';
export declare class DurationFromISOPipe implements PipeTransform {
    transform(value: string, opts?: object): Duration;
}
