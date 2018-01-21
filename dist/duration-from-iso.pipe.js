"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var luxon_1 = require("luxon");
var DurationFromISOPipe = /** @class */ (function () {
    function DurationFromISOPipe() {
    }
    DurationFromISOPipe.prototype.transform = function (value, opts) {
        return luxon_1.Duration.fromISO(value, opts);
    };
    DurationFromISOPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'aldFromISO' },] },
    ];
    /** @nocollapse */
    DurationFromISOPipe.ctorParameters = function () { return []; };
    return DurationFromISOPipe;
}());
exports.DurationFromISOPipe = DurationFromISOPipe;
//# sourceMappingURL=duration-from-iso.pipe.js.map