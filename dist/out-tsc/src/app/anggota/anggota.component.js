import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AnggotaService } from '../anggota.service';
var AnggotaComponent = /** @class */ (function () {
    function AnggotaComponent(_anggotaService) {
        this._anggotaService = _anggotaService;
        this.anggotaMalangs = [];
        this.anggotaSemarangs = [];
    }
    AnggotaComponent.prototype.ngOnInit = function () {
        this.anggotaMalangs = this._anggotaService.getAnggotaMalang();
        this.anggotaSemarangs = this._anggotaService.getAnggotaSemarang();
    };
    AnggotaComponent = tslib_1.__decorate([
        Component({
            selector: 'app-anggota',
            templateUrl: './anggota.component.html',
            styleUrls: ['./anggota.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AnggotaService])
    ], AnggotaComponent);
    return AnggotaComponent;
}());
export { AnggotaComponent };
//# sourceMappingURL=anggota.component.js.map