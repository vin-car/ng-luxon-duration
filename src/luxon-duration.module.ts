import { NgModule } from '@angular/core';

import { DurationFromISOPipe } from './duration-from-iso.pipe';
import { DurationToFormatPipe } from './duration-to-format.pipe';

const ANGULAR_LUXON_DURATION_PIPES = [
  DurationFromISOPipe,
  DurationToFormatPipe
];

@NgModule({
  declarations: ANGULAR_LUXON_DURATION_PIPES,
  exports: ANGULAR_LUXON_DURATION_PIPES
})
export class LuxonDurationModule { }