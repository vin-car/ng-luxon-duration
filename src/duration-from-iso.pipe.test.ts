import { Duration } from "luxon";

import { DurationFromISOPipe } from "./duration-from-iso.pipe";

describe('DurationFromISOPipe', () => {
  describe('fromISO', () => {

    let durationFromISOPipe: DurationFromISOPipe;

    beforeEach(() => {
      durationFromISOPipe = new DurationFromISOPipe();
    });

    const check = (s:string, ob:object) => {
      expect(durationFromISOPipe.transform(s).toObject()).toEqual(ob);
    };

    test('durationFromISOPipe can parse a variety of ISO formats', () => {
      check('P5Y3M', { years: 5, months: 3 });
      check('PT54M32S', { minutes: 54, seconds: 32 });
      check('P3DT54M32S', { days: 3, minutes: 54, seconds: 32 });
      check('P1YT34000S', { years: 1, seconds: 34000 });
      check('P2W', { weeks: 2 });
    });

    test("durationFromISOPipe can parse mixed or negative durations", () => {
      check("P-5Y-3M", { years: -5, months: -3 });
      check("PT-54M32S", { minutes: -54, seconds: 32 });
      check("P-3DT54M-32S", { days: -3, minutes: 54, seconds: -32 });
      check("P1YT-34000S", { years: 1, seconds: -34000 });
      check("P-2W", { weeks: -2 });
    });

    test('Duration.fromISO can parse fractions of seconds', () => {
      check('PT54M32.5S', { minutes: 54, seconds: 32, milliseconds: 500 });
      check('PT54M32.53S', { minutes: 54, seconds: 32, milliseconds: 530 });
      check('PT54M32.534S', { minutes: 54, seconds: 32, milliseconds: 534 });
      check('PT54M32.5348S', { minutes: 54, seconds: 32, milliseconds: 534 });
      check('PT54M32.034S', { minutes: 54, seconds: 32, milliseconds: 34 });
    });

    test('Duration.fromISO rejects junk', () => {
      const rejects = (s:string) => {
        expect(durationFromISOPipe.transform(s).isValid).toBe(false);
      };

      rejects('poop');
      rejects('PTglorb');
      rejects('P5Y34S');
      rejects('5Y');
      rejects('P34S');
      rejects('P34K');
      rejects('P5D2W');
    });
  });
});