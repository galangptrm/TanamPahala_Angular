import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var FooterService = /** @class */ (function () {
    function FooterService() {
        this.visibility = true;
    }
    FooterService.prototype.hide = function () { this.visibility = false; };
    FooterService.prototype.show = function () { this.visibility = true; };
    FooterService.prototype.toggle = function () { this.visibility = !this.visibility; };
    FooterService.prototype.doSomething = function () {
    };
    FooterService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FooterService);
    return FooterService;
}());
export { FooterService };
//# sourceMappingURL=footer.service.js.map