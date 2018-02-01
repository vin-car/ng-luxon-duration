import { Duration } from "luxon";

import { DurationFromMillisPipe } from "./duration-from-millis.pipe";

describe('DurationFromMillisPipe', () => {
  describe('fromMillis', () => {

    let pipe: DurationFromMillisPipe;

    beforeEach(() => {
      pipe = new DurationFromMillisPipe();
    });

    test('DateTime.fromMillis(ms) has a value of ms', () => {
      const bigValue = 391147200000;
      expect(pipe.transform(bigValue).milliseconds).toBe(bigValue);

      expect(pipe.transform(0).milliseconds).toBe(0);
    });
  });
});