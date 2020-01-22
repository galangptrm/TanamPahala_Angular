import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BerandaService {

constructor(private http : HttpClient) { }

private _url_get_statistik_dev_v2 = 'http://localhost:8001/api/stat';
private _url_get_statistik_prod_v2 = 'http://cms.tanampahala.com/api/stat';

public getStatistik() {
  return this.http.get(this._url_get_statistik_dev_v2);
}

// public getStatistik2() {
//   let stat = this.getStatistik();
//   return [
//     {"img":"../../assets/website/v2/ggift.png", "judul" : "Jumlah Donatur", "jumlah" : "573", "keterangan" : "Orang"},
//     {"img":"../../assets/website/v2/gtrash.png", "judul" : "Sampah Terkumpul", "jumlah" : "528", "keterangan" : "Kg"},
//     {"img":"../../assets/website/v2/gcoin.png", "judul" : "Koin Terkumpul", "jumlah" : "Rp.356,500", "keterangan" : ""},
//     {"img":"../../assets/website/v2/ghandshake.png", "judul" : "Penerima Manfaat", "jumlah" : "1024", "keterangan" : "Orang"}
//   ]
// }

public getGallery(){
  return [
    {"img" : "../assets/dokumentasi/bagitakjill.jpg" },
    {"img" : "../assets/dokumentasi/3.jpg" },
    {"img" : "../assets/dokumentasi/1.jpg" },
    {"img" : "../assets/dokumentasi/baginasii.jpg" },
    {"img" : "../assets/dokumentasi/tpsemarangg.jpg" },
    {"img" : "../assets/dokumentasi/Actf.jpg" },
    {"img" : "../assets/dokumentasi/18304.jpg" },
    {"img" : "../assets/dokumentasi/dokk.jpg" },
    {"img" : "../assets/dokumentasi/baginasi1.jpg" }
  ]
}

public getMitra(){
  return [
    {"img" : "../../assets/mitra/act/act.png", "url" : "/mitra/aksi-cepat-tanggap"},
    {"img" : "../../assets/mitra/harfaa/harfaa.png", "url" : "/mitra/harapan-dhuafa"},
    {"img" : "../../assets/mitra/sahabatanakkankermalang/logo.jpg", "url" : "/mitra/yayasan-sahabat-anak-kanker-malang"},
    {"img" : "../../assets/mitra/malangcatsurvival/logo.jpg", "url" : "/mitra/malang-cat-survival"},
    {"img" : "../../assets/mitra/malangpotrait/logo.jpg", "url" : "/mitra/malang-potrait"},
    {"img" : "../../assets/mitra/sendalbunda/logo.jpg", "url" : "/mitra/sendal-bunda"},
    {"img" : "../../assets/mitra/pojokprinting/logo.jpg", "url" : "/mitra/pojok-printing"},
    {"img" : "../../assets/mitra/geraiwika/logo.jpg", "url" : "/mitra/geraiwika"},
    {"img" : "../../assets/mitra/bantencatering/logo.png", "url" : "/mitra/banten-catering"},
    {"img" : "../../assets/mitra/ragambingkai/ragambingkai.png", "url" : "/mitra/ragam-bingkai"},
    {"img" : "../../assets/mitra/maklum/logo.png", "url" : "/mitra/martabak-lumpia-malang"},
    {"img" : "../../assets/mitra/sumochi/logo.jpg", "url" : "/mitra/kedai-sumochi"},
    {"img" : "../../assets/mitra/fardiazcatering/logo.png", "url" : "/mitra/fardiaz-catering"}
  ]
}

}
