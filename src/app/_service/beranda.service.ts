import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BerandaService {

  constructor() { }

public getStatistik() {
  return [
    {"img":"../../assets/icon/donasi.png", "judul" : "Jumlah Donatur", "jumlah" : "37", "keterangan" : "Orang"},
    {"img":"../../assets/icon/bin.png", "judul" : "Sampah Terkumpul", "jumlah" : "50", "keterangan" : "Kg"},
    {"img":"../../assets/icon/koin-crop.png", "judul" : "Koin Terkumpul", "jumlah" : "Rp.100,000", "keterangan" : ""},
    {"img":"../../assets/icon/handshake.png", "judul" : "Penerima Bantuan", "jumlah" : "409", "keterangan" : "Pihak"}
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
