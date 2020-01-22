import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BerandaService {

  constructor( private http : HttpClient ) { }

  private _url_get_statistik_dev_v2 = 'http://localhost:8001/api/stat/';
  private _url_get_statistik_prod_v2 = 'http://cms.tanampahala.com/api/stat';

  public getStatistiks() {
    return this.http.get(this._url_get_statistik_dev_v2).pipe();  
  }

  public getStatistiks2() {
    return [
      {"img":"../../assets/website/v2/ggift.png", "judul" : "Jumlah Donatur", "jumlah" : "37", "keterangan" : "Orang"},
      {"img":"../../assets/website/v2/gtrash.png", "judul" : "Sampah Tersisa", "jumlah" : "5", "keterangan" : "Kilogram"},
      {"img":"../../assets/website/v2/ghandshake.png", "judul" : "Penerima Bantuan", "jumlah" : "409", "keterangan" : "Pihak"},
      {"img":"../../assets/website/v2/gdocument.png", "judul" : "Sampah Terkumpul", "jumlah" : "302", "keterangan" : "Kilogram"},
    ]
  }

  public getGallery(){
    return [
      {"img" : "../assets/bagitakjill.jpg" },
      {"img" : "../assets/3.jpg" },
      {"img" : "../assets/1.jpg" },
      {"img" : "../assets/baginasii.jpg" },
      {"img" : "../assets/tpsemarangg.jpg" },
      {"img" : "../assets/Actf.jpg" },
      {"img" : "../assets/18304.jpg" },
      {"img" : "../assets/dokk.jpg" },
      {"img" : "../assets/recehan.jpg" }
    ]
  }

  public getMitra(){
    return [
      {"img" : "../../assets/mitra/ragambingkai.png", "url" : ""},
      {"img" : "../../assets/mitra/act.png", "url" : "http://act.id"},
      {"img" : "../../assets/mitra/harfaa.png", "url" : ""},
      {"img" : "../../assets/mitra/creatingcatering.png", "url" : ""},
      {"img" : "../../assets/mitra/oemahku.png", "url" : ""},
      {"img" : "../../assets/mitra/maklum.png", "url" : ""},
      {"img" : "../../assets/mitra/anekajajanan.png", "url" : ""}
    ]
  }

}
