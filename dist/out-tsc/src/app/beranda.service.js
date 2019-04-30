import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var BerandaService = /** @class */ (function () {
    function BerandaService() {
    }
    BerandaService.prototype.getStatistik = function () {
        return [
            { "img": "../../assets/donasi.png", "judul": "Jumlah Donatur", "jumlah": "37", "keterangan": "Orang" },
            { "img": "../../assets/bin.png", "judul": "Sampah Tersisa", "jumlah": "5", "keterangan": "Kilogram" },
            { "img": "../../assets/handshake.png", "judul": "Penerima Bantuan", "jumlah": "409", "keterangan": "Pihak" },
            { "img": "../../assets/report.png", "judul": "Sampah Terkumpul", "jumlah": "302", "keterangan": "Kilogram" },
        ];
    };
    BerandaService.prototype.getGaleri = function () {
        return [
            { "url": "../../assets/3.jpg" },
            { "url": "../../assets/1.jpg" },
            { "url": "../../assets/baginasii.jpg" },
            { "url": "../../assets/tpsemarangg.jpg" },
            { "url": "../../assets/Actf.jpg" },
            { "url": "../../assets/18304.jpg" },
            { "url": "../../assets/dokk.jpg" },
            { "url": "../../assets/recehan.jpg" },
            { "url": "" },
        ];
    };
    BerandaService.prototype.getMitra = function () {
        return [
            { "url": "" },
            { "url": "" },
            { "url": "" },
            { "url": "" },
            { "url": "" },
        ];
    };
    BerandaService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], BerandaService);
    return BerandaService;
}());
export { BerandaService };
//# sourceMappingURL=beranda.service.js.map