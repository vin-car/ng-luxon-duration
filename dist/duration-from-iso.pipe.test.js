"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var duration_from_iso_pipe_1 = require("./duration-from-iso.pipe");
describe('DurationFromISOPipe', function () {
    describe('fromISO', function () {
        var durationFromISOPipe;
        beforeEach(function () {
            durationFromISOPipe = new duration_from_iso_pipe_1.DurationFromISOPipe();
        });
        test('durationFromISOPipe can parse a variety of ISO formats', function () {
            var check = function (s, ob) {
                expect(durationFromISOPipe.transform(s).toObject()).toEqual(ob);
            };
            check('P5Y3M', { years: 5, months: 3 });
            check('PT54M32S', { minutes: 54, seconds: 32 });
            check('P3DT54M32S', { days: 3, minutes: 54, seconds: 32 });
            check('P1YT34000S', { years: 1, seconds: 34000 });
            check('P2W', { weeks: 2 });
        });
        test('Duration.fromISO rejects junk', function () {
            var rejects = function (s) {
                expect(durationFromISOPipe.transform(s).as('milliseconds')).toBe(0);
            };
            rejects('poop');
            rejects('P5Y34S');
            rejects('5Y');
            rejects('P34S');
            rejects('P34K');
            rejects('P5D2W');
        });
    });
});
//# sourceMappingURL=duration-from-iso.pipe.test.js.map