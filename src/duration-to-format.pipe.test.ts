import { Duration } from "luxon";

import { DurationToFormatPipe } from "./duration-to-format.pipe";

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

describe('DurationToFormatPipe', () => {
  describe('toFormat', () => {

    let pipe: DurationToFormatPipe;

    beforeEach(() => {
      pipe = new DurationToFormatPipe();
    });

    test("Duration#toFormat('S') returns milliseconds", () => {
      expect(pipe.transform(dur(),'S')).toBe('36993906007');
    
      const lil = Duration.fromMillis(5);
      expect(pipe.transform(lil,'S')).toBe('5');
      expect(pipe.transform(lil,'SS')).toBe('05');
      expect(pipe.transform(lil,'SSSSS')).toBe('00005');
    });
    
    test("Duration#toFormat('s') returns seconds", () => {
      expect(pipe.transform(dur(),'s')).toBe('36993906');
      expect(pipe.transform(dur(),'s', { round: false })).toBe('36993906.007');
      expect(pipe.transform(dur(),'s.SSS')).toBe('36993906.007');

      const lil = Duration.fromObject({ seconds: 6 });
      expect(pipe.transform(lil,'s')).toBe('6');
      expect(pipe.transform(lil,'ss')).toBe('06');
      expect(pipe.transform(lil,'sss')).toBe('006');
      expect(pipe.transform(lil,'ssss')).toBe('0006');
    });
    
    test("Duration#toFormat('m') returns minutes", () => {
      expect(pipe.transform(dur(),'m')).toBe('616565');
      expect(pipe.transform(dur(),'m', { round: false })).toBe('616565.1');
      expect(pipe.transform(dur(),'m:ss')).toBe('616565:06');
      expect(pipe.transform(dur(),'m:ss.SSS')).toBe('616565:06.007');

      const lil = Duration.fromObject({ minutes: 6 });
      expect(pipe.transform(lil,'m')).toBe('6');
      expect(pipe.transform(lil,'mm')).toBe('06');
      expect(pipe.transform(lil,'mmm')).toBe('006');
      expect(pipe.transform(lil,'mmmm')).toBe('0006');
    });
    
    test("Duration#toFormat('h') returns hours", () => {
      expect(pipe.transform(dur(),'h')).toBe('10276');
      expect(pipe.transform(dur(),'h', { round: false })).toBe('10276.085');
      expect(pipe.transform(dur(),'h:ss')).toBe('10276:306');
      expect(pipe.transform(dur(),'h:mm:ss.SSS')).toBe('10276:05:06.007');

      const lil = Duration.fromObject({ hours: 6 });
      expect(pipe.transform(lil,'h')).toBe('6');
      expect(pipe.transform(lil,'hh')).toBe('06');
      expect(pipe.transform(lil,'hhh')).toBe('006');
      expect(pipe.transform(lil,'hhhh')).toBe('0006');
    });
    
    test("Duration#toFormat('d') returns days", () => {
      expect(pipe.transform(dur(),'d')).toBe('428');
      expect(pipe.transform(dur(),'d', { round: false })).toBe('428.17');
      expect(pipe.transform(dur(),'d:h:ss')).toBe('428:4:306');
      expect(pipe.transform(dur(),'d:h:mm:ss.SSS')).toBe('428:4:05:06.007');

      const lil = Duration.fromObject({ days: 6 });
      expect(pipe.transform(lil,'d')).toBe('6');
      expect(pipe.transform(lil,'dd')).toBe('06');
      expect(pipe.transform(lil,'ddd')).toBe('006');
      expect(pipe.transform(lil,'dddd')).toBe('0006');
    });
    
    test("Duration#toFormat('M') returns months", () => {
      expect(pipe.transform(dur(),'M')).toBe('14');
      expect(pipe.transform(dur(),'M', { round: false })).toBe('14.106');
      expect(pipe.transform(dur(),'M:s')).toBe('14:273906');
      expect(pipe.transform(dur(),'M:dd:h:mm:ss.SSS')).toBe('14:03:4:05:06.007');

      const lil = Duration.fromObject({ months: 6 });
      expect(pipe.transform(lil,'M')).toBe('6');
      expect(pipe.transform(lil,'MM')).toBe('06');
      expect(pipe.transform(lil,'MMM')).toBe('006');
      expect(pipe.transform(lil,'MMMM')).toBe('0006');
    });
    
    test("Duration#toFormat('y') returns years", () => {
      expect(pipe.transform(dur(),'y')).toBe('1');
      expect(pipe.transform(dur(),'y', { round: false })).toBe('1.175');
      expect(pipe.transform(dur(),'y:m')).toBe('1:90965');
      expect(pipe.transform(dur(),'y:M:dd:h:mm:ss.SSS')).toBe('1:2:03:4:05:06.007');
    
      const lil = Duration.fromObject({ years: 5 });
      expect(pipe.transform(lil,'y')).toBe('5');
      expect(pipe.transform(lil,'yy')).toBe('05');
      expect(pipe.transform(lil,'yyyyy')).toBe('00005');
    });

    test('Duration#toFormat leaves in zeros', () => {
      const tiny = Duration.fromObject({ seconds: 5 });
      expect(pipe.transform(tiny,'hh:mm:ss')).toBe('00:00:05');
      expect(pipe.transform(tiny,'hh:mm:ss.SSS')).toBe('00:00:05.000');
    });

    test("Duration#toFormat returns a lame string for invalid durations", () => {
      const lil = Duration.invalid("because");
      expect(pipe.transform(lil)).toBe("Invalid Duration");
    });
  });
});