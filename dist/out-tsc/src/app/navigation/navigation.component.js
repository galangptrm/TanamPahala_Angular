import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavbarService } from '../navbar.service';
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(nav) {
        this.nav = nav;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        // $('.sidenav').sidenav()
    };
    NavigationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-navigation',
            templateUrl: './navigation.component.html',
            styleUrls: ['./navigation.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [NavbarService])
    ], NavigationComponent);
    return NavigationComponent;
}());
export { NavigationComponent };
//# sourceMappingURL=navigation.component.js.map