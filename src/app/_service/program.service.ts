import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IProgram } from '../_interface/program';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }

  private _url_post_detail = 'http://cms.tanampahala.com/api/v1/post/featured/program/';
  private _url_post_list_prod = 'http://cms.tanampahala.com/api/v1/post/featured/';
  // private _url_post_list = 'https://jsonplaceholder.typicode.com/posts';

  private _url_post_list_dev = 'http://localhost:6060/TanamPahala/TanamPahala_cms/api/v1/post/featured/3';
  private _url_post_detail_dev = 'http://localhost:6060/TanamPahala/TanamPahala_cms/api/v1/post/featured/';

  public getDokumentasi(){
    return [
      {"img" : "../../assets/dokumentasi/baginasi.jpg", "judul" : "Kegiatan Bagi-Bagi Makanan", "deskripsi" : "Salah satu realisasi dari program unggulan Tanam Pahala adalah Program Bagi-Bagi Makanan yang kita bagikan kepada orang-orang kurang beruntung ditempat-tempat tertentu. Mudah-mudahan semua Sahabat Tanam Pahala mendapatkan balasan dari apa yang didonasikan."},
      {"img" : "../../assets/dokumentasi/bagitakjil.jpg", "judul" : "Kegiatan Bagi Takjil", "deskripsi" : "Bagi Takjil merupakan salah satu dari sekian banyak bentuk kegiatan sosial yang Tanam Pahala laksanakan. Berbagai bentuk kegiatan yang berbau sosial juga akan dilaksanakan untuk menyambut bulan Ramadhan selain kegiatan bagi takjil ini."},
      {"img" : "../../assets/dokumentasi/ACT.jpg", "judul" : "Bersama Membantu Sesama", "deskripsi" : "Hasil donasi dari semua sahabat Tanam Pahala akan disalurkan untuk kegiatan sosial dan kegiatan peduli sesama. Semisal untuk membantu saudara-saudara kita yang sedang mendapatkan musibah. Tanam Pahala akan bergerak cepat berkolaborasi dengan organisasi berbasis sosial lainnya untuk memberikan bantuan."},
      {"img" : "../../assets/dokumentasi/Dok-botol2.jpg", "judul" : "Donasi dari Sahabat Tanam Pahala", "deskripsi" : "Salah satu dari sekian banyak Sahabat Tanam Pahala yang mendonasikan sampahnya dan mulai beramal. Untuk Sahabat Tanam Pahala bisa mendonasikan sampah berupa botol, kertas, kardus, dan pakaian yang sudah tidak terpakai. Untuk opsi lain bagi Sahabat Tanam Pahala yang tidak memiliki sampah seperti yang disebutkan juga bisa berdonasi dalam bentuk uang tunai langsung."}
    ]
  }

  public getPost(slug){
    return this.http.get(this._url_post_detail+slug);
  }

  public getProgramImg(limit){
    return this.http.get(this._url_post_list_prod+limit);
  }

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }

}
