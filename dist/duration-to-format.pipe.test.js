"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var luxon_1 = require("luxon");
var duration_to_format_pipe_1 = require("./duration-to-format.pipe");
var dur = function () {
    return luxon_1.Duration.fromObject({
        years: 1,
        months: 2,
        days: 3,
        hours: 4,
        minutes: 5,
        seconds: 6,
        milliseconds: 7
    });
};
var ɵ0 = dur;
exports.ɵ0 = ɵ0;
describe('DurationToFormatPipe', function () {
    describe('toFormat', function () {
        var pipe;
        beforeEach(function () {
            pipe = new duration_to_format_pipe_1.DurationToFormatPipe();
        });
        test("Duration#toFormat('S') returns milliseconds", function () {
            expect(pipe.transform(dur(), 'S')).toBe('36993906007');
            var lil = luxon_1.Duration.fromMillis(5);
            expect(pipe.transform(lil, 'S')).toBe('5');
            expect(pipe.transform(lil, 'SS')).toBe('05');
            expect(pipe.transform(lil, 'SSSSS')).toBe('00005');
        });
        test("Duration#toFormat('s') returns seconds", function () {
            expect(pipe.transform(dur(), 's')).toBe('36993906');
            expect(pipe.transform(dur(), 's', { round: false })).toBe('36993906.007');
            expect(pipe.transform(dur(), 's.SSS')).toBe('36993906.007');
        });
        test("Duration#toFormat('m') returns minutes", function () {
            expect(pipe.transform(dur(), 'm')).toBe('616565');
            expect(pipe.transform(dur(), 'm', { round: false })).toBe('616565.1');
            expect(pipe.transform(dur(), 'm:ss')).toBe('616565:06');
            expect(pipe.transform(dur(), 'm:ss.SSS')).toBe('616565:06.007');
        });
        test("Duration#toFormat('h') returns hours", function () {
            expect(pipe.transform(dur(), 'h')).toBe('10276');
            expect(pipe.transform(dur(), 'h', { round: false })).toBe('10276.085');
            expect(pipe.transform(dur(), 'h:ss')).toBe('10276:306');
            expect(pipe.transform(dur(), 'h:mm:ss.SSS')).toBe('10276:05:06.007');
        });
        test("Duration#toFormat('d') returns days", function () {
            expect(pipe.transform(dur(), 'd')).toBe('428');
            expect(pipe.transform(dur(), 'd', { round: false })).toBe('428.17');
            expect(pipe.transform(dur(), 'd:h:ss')).toBe('428:4:306');
            expect(pipe.transform(dur(), 'd:h:mm:ss.SSS')).toBe('428:4:05:06.007');
        });
        test("Duration#toFormat('M') returns months", function () {
            expect(pipe.transform(dur(), 'M')).toBe('14');
            expect(pipe.transform(dur(), 'M', { round: false })).toBe('14.106');
            expect(pipe.transform(dur(), 'M:s')).toBe('14:273906');
            expect(pipe.transform(dur(), 'M:dd:h:mm:ss.SSS')).toBe('14:03:4:05:06.007');
        });
        test("Duration#toFormat('y') returns years", function () {
            expect(pipe.transform(dur(), 'y')).toBe('1');
            expect(pipe.transform(dur(), 'y', { round: false })).toBe('1.175');
            expect(pipe.transform(dur(), 'y:m')).toBe('1:90965');
            expect(pipe.transform(dur(), 'y:M:dd:h:mm:ss.SSS')).toBe('1:2:03:4:05:06.007');
            var lil = luxon_1.Duration.fromObject({ years: 5 });
            expect(pipe.transform(lil, 'y')).toBe('5');
            expect(pipe.transform(lil, 'yy')).toBe('05');
            expect(pipe.transform(lil, 'yyyyy')).toBe('00005');
        });
        test('Duration#toFormat leaves in zeros', function () {
            var tiny = luxon_1.Duration.fromObject({ seconds: 5 });
            expect(pipe.transform(tiny, 'hh:mm:ss')).toBe('00:00:05');
            expect(pipe.transform(tiny, 'hh:mm:ss.SSS')).toBe('00:00:05.000');
        });
    });
});
//# sourceMappingURL=duration-to-format.pipe.test.js.map