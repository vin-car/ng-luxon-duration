"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DurationToFormatPipe = /** @class */ (function () {
    function DurationToFormatPipe() {
    }
    DurationToFormatPipe.prototype.transform = function (value, format, opts) {
        return value.toFormat(format, opts);
    };
    DurationToFormatPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'aldToFormat' },] },
    ];
    /** @nocollapse */
    DurationToFormatPipe.ctorParameters = function () { return []; };
    return DurationToFormatPipe;
}());
exports.DurationToFormatPipe = DurationToFormatPipe;
//# sourceMappingURL=duration-to-format.pipe.js.map