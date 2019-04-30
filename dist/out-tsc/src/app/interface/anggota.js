var Anggota = /** @class */ (function () {
    function Anggota(nama, jabatan, tempatLahir, tglLahir, jurusan, angkatan) {
        nama = this.nama;
        jabatan = this.jabatan;
        tempatLahir = this.tempatLahir;
        tglLahir = this.tglLahir;
        jurusan = this.jurusan;
        angkatan = this.angkatan;
    }
    Anggota.prototype.getnama = function () {
        return this.nama;
    };
    Anggota.prototype.setnama = function (value) {
        this.nama = value;
    };
    Anggota.prototype.getjabatan = function () {
        return this.jabatan;
    };
    Anggota.prototype.setjabatan = function (value) {
        this.jabatan = value;
    };
    Anggota.prototype.gettempatLahir = function () {
        return this.tempatLahir;
    };
    Anggota.prototype.settempatLahir = function (value) {
        this.tempatLahir = value;
    };
    Anggota.prototype.gettglLahir = function () {
        return this.tglLahir;
    };
    Anggota.prototype.settglLahir = function (value) {
        this.tglLahir = value;
    };
    Anggota.prototype.getjurusan = function () {
        return this.jurusan;
    };
    Anggota.prototype.setjurusan = function (value) {
        this.jurusan = value;
    };
    Anggota.prototype.getangkatan = function () {
        return this.angkatan;
    };
    Anggota.prototype.setangkatan = function (value) {
        this.angkatan = value;
    };
    return Anggota;
}());
export { Anggota };
//# sourceMappingURL=anggota.js.map