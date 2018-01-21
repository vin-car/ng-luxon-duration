"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var duration_from_iso_pipe_1 = require("./duration-from-iso.pipe");
var duration_to_format_pipe_1 = require("./duration-to-format.pipe");
var ANGULAR_LUXON_DURATION_PIPES = [
    duration_from_iso_pipe_1.DurationFromISOPipe,
    duration_to_format_pipe_1.DurationToFormatPipe
];
var LuxonDurationModule = /** @class */ (function () {
    function LuxonDurationModule() {
    }
    LuxonDurationModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: ANGULAR_LUXON_DURATION_PIPES,
                    exports: ANGULAR_LUXON_DURATION_PIPES
                },] },
    ];
    /** @nocollapse */
    LuxonDurationModule.ctorParameters = function () { return []; };
    return LuxonDurationModule;
}());
exports.LuxonDurationModule = LuxonDurationModule;
//# sourceMappingURL=luxon-duration.module.js.map