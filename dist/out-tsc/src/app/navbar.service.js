import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.visibility = true;
    }
    NavbarService.prototype.hide = function () { this.visibility = false; };
    NavbarService.prototype.show = function () { this.visibility = true; };
    NavbarService.prototype.toggle = function () { this.visibility = !this.visibility; };
    NavbarService.prototype.doSomething = function () {
    };
    NavbarService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NavbarService);
    return NavbarService;
}());
export { NavbarService };
//# sourceMappingURL=navbar.service.js.map