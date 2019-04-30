import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BerandaService } from '../beranda.service';
var BodyComponent = /** @class */ (function () {
    function BodyComponent(_berandaService) {
        this._berandaService = _berandaService;
        this.galeries = [];
        this.statistiks = [];
        this.mitras = [];
    }
    BodyComponent.prototype.ngOnInit = function () {
        this.galeries = this._berandaService.getGaleri();
        this.statistiks = this._berandaService.getStatistik();
        this.mitras = this._berandaService.getMitra();
    };
    BodyComponent.prototype.onClick = function (value) {
        this.quotes = value;
    };
    BodyComponent = tslib_1.__decorate([
        Component({
            selector: 'app-body',
            templateUrl: './body.component.html',
            styleUrls: ['./body.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [BerandaService])
    ], BodyComponent);
    return BodyComponent;
}());
export { BodyComponent };
//# sourceMappingURL=body.component.js.map