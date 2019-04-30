import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FooterService } from '../footer.service';
var FooterComponent = /** @class */ (function () {
    function FooterComponent(foot) {
        this.foot = foot;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FooterService])
    ], FooterComponent);
    return FooterComponent;
}());
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map