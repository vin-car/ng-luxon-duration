import { Duration } from "luxon";

import { DurationToISOPipe } from "./duration-to-iso.pipe";

const dur = () =>
  Duration.fromObject({
    years: 1,
    months: 2,
    days: 3,
    hours: 4,
    minutes: 5,
    seconds: 6,
    milliseconds: 7
  });

describe('DurationToISOPipe', () => {
  describe('toISO', () => {

    let pipe: DurationToISOPipe;

    beforeEach(() => {
      pipe = new DurationToISOPipe();
    });

    test("Duration#toISO() returns full ISO string", () => {
      expect(pipe.transform(dur())).toBe('P1Y2M3DT4H5M6.007S');
    });

    test("Duration#toISO() returns milliseconds", () => {
      const lil = Duration.fromMillis(7);
      expect(pipe.transform(lil)).toBe('PT0.007S');
    });
    
    test("Duration#toISO() returns seconds", () => {
      const lil = Duration.fromObject({ seconds: 5 });
      expect(pipe.transform(lil)).toBe('PT5S');
    });
    
    test("Duration#toISO() returns minutes", () => {
      const lil = Duration.fromObject({ minutes: 4 });
      expect(pipe.transform(lil)).toBe('PT4M');
    });
    
    test("Duration#toISO() returns hours", () => {
      const lil = Duration.fromObject({ hours: 3 });
      expect(pipe.transform(lil)).toBe('PT3H');
    });
    
    test("Duration#toISO() returns days", () => {
      const lil = Duration.fromObject({ days: 2 });
      expect(pipe.transform(lil)).toBe('P2D');
    });
    
    test("Duration#toISO() returns months", () => {
      const lil = Duration.fromObject({ months: 1 });
      expect(pipe.transform(lil)).toBe('P1M');
    });
    
    test("Duration#toISO() returns years", () => {
      const lil = Duration.fromObject({ years: 7 });
      expect(pipe.transform(lil)).toBe('P7Y');
    });

  });
});