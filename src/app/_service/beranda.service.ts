import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BerandaService {

  constructor() { }

public getStatistik() {
  return [
    {"img":"../../assets/icon/donasi.png", "judul" : "Jumlah Donatur", "jumlah" : "37", "keterangan" : "Orang"},
    {"img":"../../assets/icon/bin.png", "judul" : "Sampah Tersisa", "jumlah" : "5", "keterangan" : "Kilogram"},
    {"img":"../../assets/icon/handshake.png", "judul" : "Penerima Bantuan", "jumlah" : "409", "keterangan" : "Pihak"},
    {"img":"../../assets/icon/report.png", "judul" : "Sampah Terkumpul", "jumlah" : "302", "keterangan" : "Kilogram"},
  ]
}

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
    {"img" : "../../assets/mitra/ragambingkai.png", "url" : "#"},
    {"img" : "../../assets/mitra/act.png", "url" : "http://act.id"},
    {"img" : "../../assets/mitra/harfaa.png", "url" : "#"},
    {"img" : "../../assets/mitra/creatingcatering.png", "url" : "#"},
    {"img" : "../../assets/mitra/oemahku.png", "url" : "#"},
    {"img" : "../../assets/mitra/maklum.png", "url" : "#"},
    {"img" : "../../assets/mitra/anekajajanan.png", "url" : "#"}
  ]
}

}
