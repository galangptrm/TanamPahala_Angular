import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { FooterService } from '../footer.service';
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(nav, foot) {
        this.nav = nav;
        this.foot = foot;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        this.nav.hide();
        this.foot.hide();
    };
    PageNotFoundComponent = tslib_1.__decorate([
        Component({
            selector: 'app-page-not-found',
            templateUrl: './page-not-found.component.html',
            styleUrls: ['./page-not-found.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [NavbarService,
            FooterService])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
export { PageNotFoundComponent };
//# sourceMappingURL=page-not-found.component.js.map