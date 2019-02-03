import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor() { }

  public getDokumentasi(){
    return [
      {"img" : "../../assets/baginasi.jpg", "judul" : "Kegiatan Bagi-Bagi Makanan", "deskripsi" : "Salah satu realisasi dari program unggulan Tanam Pahala adalah Program Bagi-Bagi Makanan yang kita bagikan kepada orang-orang kurang beruntung ditempat-tempat tertentu. Mudah-mudahan semua Sahabat Tanam Pahala mendapatkan balasan dari apa yang didonasikan."},
      {"img" : "../../assets/bagitakjil.jpg", "judul" : "Kegiatan Bagi Takjil", "deskripsi" : "Bagi Takjil merupakan salah satu dari sekian banyak bentuk kegiatan sosial yang Tanam Pahala laksanakan. Berbagai bentuk kegiatan yang berbau sosial juga akan dilaksanakan untuk menyambut bulan Ramadhan selain kegiatan bagi takjil ini."},
      {"img" : "../../assets/ACT.jpg", "judul" : "Bersama Membantu Sesama", "deskripsi" : "Hasil donasi dari semua sahabat Tanam Pahala akan disalurkan untuk kegiatan sosial dan kegiatan peduli sesama. Semisal untuk membantu saudara-saudara kita yang sedang mendapatkan musibah. Tanam Pahala akan bergerak cepat berkolaborasi dengan organisasi berbasis sosial lainnya untuk memberikan bantuan."},
      {"img" : "../../assets/Dok-botol2.jpg", "judul" : "Donasi dari Sahabat Tanam Pahala", "deskripsi" : "Salah satu dari sekian banyak Sahabat Tanam Pahala yang mendonasikan sampahnya dan mulai beramal. Untuk Sahabat Tanam Pahala bisa mendonasikan sampah berupa botol, kertas, kardus, dan pakaian yang sudah tidak terpakai. Untuk opsi lain bagi Sahabat Tanam Pahala yang tidak memiliki sampah seperti yang disebutkan juga bisa berdonasi dalam bentuk uang tunai langsung."}
    ]
  }

}
