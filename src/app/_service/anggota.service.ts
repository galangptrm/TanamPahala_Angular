import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnggotaService {

  constructor( private http : HttpClient) { }

  private _url_get_anggota_all_dev_v2 = 'http://localhost:8001/api/anggota/'
  private _url_get_anggota_all_prod_v2 = 'http://cms.tanampahala.com/api/anggota'

  public getAnggota (){
    return this.http.get(this._url_get_anggota_all_prod_v2)
  }

  public getAnggotaAll(){
    return [
      //Malang
      {"nama" : "Rizki Nurul Arsy", 
      "panggilan" : "Rizki", 
      "ttl" : "Serang, 4 Maret 1998", 
      "jabatan" : "Leader Tanam Pahala", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/mas rizky.jpg", 
      "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Shulhan Darajat", 
      "panggilan" : "Shulhan", 
      "ttl" : "Serang, 28 Februari 1998", 
      "jabatan" : "Leader Celengan Amal", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/massulhan.jpg", 
      "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Galang Putratama", 
      "panggilan" : "Galang", 
      "ttl" : "Jakarta, 01 Februari 1997", 
      "jabatan" : "Web Developer", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/masgalang.jpg", 
      "ig" : "galangptrm", "fb" : false, "line" : false },

      {"nama" : "Rifaldi Raya", 
      "panggilan" : "Rifal", 
      "ttl" : "Bangkalan, 20 Januari 1999", 
      "jabatan" : "Web Developer", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/Rifal.jpg", 
      "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Moh Imam Rosyidi", 
      "panggilan" : "Rosyidi", 
      "ttl" : "Sumenep, 15 November 1999", 
      "jabatan" : "Designer", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/rosi.jpg", 
      "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Khoirul Badriyah", 
      "panggilan" : "Khobar", 
      "ttl" : "Pandeglang, 11 April 1998", 
      "jabatan" : "Social Media Admin", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/mbak Khobar.jpg", 
      "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Nandika Sekar Guamaharani", 
      "panggilan" : "Nandika", 
      "ttl" : "Grobogan, 08 April 1998", 
      "jabatan" : "Treasurer", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/mbakNandika.jpg", 
      "ig" : false, "fb" : false, "line" : false },
      {"nama" : "Trianto", 
      "panggilan" : "Trianto", 
      "ttl" : "Cilacap, 26 Juni 1997", 
      "jabatan" : "Member", 
      "domisili" : "Semarang" , 
      "foto" : "../../assets/profil/semarang/26267.jpg", 
      "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Siti Rohmaniah", 
      "panggilan" : "Rohmaniah", 
      "ttl" : "Wonogiri, 05 November 1997", 
      "jabatan" : "Member", 
      "domisili" : "Semarang" , 
      "foto" : "../../assets/profil/semarang/26268.jpg",
       "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Febryan Taufiq", 
      "panggilan" : "Febry",
       "ttl" : "Jepara, 19 Februari 1998", 
       "jabatan" : "Member", 
       "domisili" : "Semarang" , 
       "foto" : "../../assets/profil/semarang/26266.jpg", 
       "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Mochammad Iffan Zulfiandri",
       "panggilan" : "Iffan", 
       "ttl" : "Serang, 27 Juni 1998",
       "jabatan" : "Member",
       "domisili" : "Semarang" , 
       "foto" : "../../assets/profil/semarang/1.jpg", 
       "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Dewi Anggraini", 
      "panggilan" : "Dewi", 
      "ttl" : "Kab. Semarang 16 juli 1998", 
      "jabatan" : "Member", 
      "domisili" : "Semarang" , 
      "foto" : "../../assets/profil/semarang/kartun.jpg", 
      "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Muhammad Kautsar Aqsa", 
      "panggilan" : "Aqsa", 
      "ttl" : "Jakarta, 25 Agustus 1998", 
      "jabatan" : "Member", 
      "domisili" : "Semarang" , 
      "foto" : "../../assets/profil/semarang/26264.jpg", 
      "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Alifia Hanifah Mumtaz", 
      "panggilan" : "Alifia", 
      "ttl" : "Serang, 02 September 1998", 
      "jabatan" : "Member", 
      "domisili" : "Semarang" , 
      "foto" : "../../assets/profil/semarang/26265.jpg", 
      "ig" : false, "fb" : false, "line" : false },

      {"nama" : "Farah Noviandini", 
      "panggilan" : "Farah", 
      "ttl" : "Bangkalan, 6 November 1998", 
      "jabatan" : "Member", 
      "domisili" : "Surabaya" , 
      "foto" : "../../assets/profil/surabaya/farah.png", 
      "ig" : "farahnoviandini", "fb" : false, "line" : "farahnoviandini" }, 

      {"nama" : "Alifah Salsabila", 
      "panggilan" : "Alifah", 
      "ttl" : "Surabaya, 18 Juni 1999", 
      "jabatan" : "Member", 
      "domisili" : "Surabaya" , 
      "foto" : "../../assets/profil/surabaya/default.jpg", 
      "ig" : "alfhsalsa", "fb" : false, "line" : "alfhsalsa" }, 

      {"nama" : "Athariq Dias Muyasar", 
      "panggilan" : "Dias", 
      "ttl" : "Bekasi, 20 Oktober 1999", 
      "jabatan" : "Member", 
      "domisili" : "Surabaya" , 
      "foto" : "../../assets/profil/surabaya/dias.png", 
      "ig" : "athariqdiasm", "fb" : false, "line" : "athariqdm" },

      {"nama" : "Bunga Mastiti Darmawan", 
      "panggilan" : "Bunga", 
      "ttl" : "Jombang, 12 April 2000", 
      "jabatan" : "Member", 
      "domisili" : "Surabaya" , 
      "foto" : "../../assets/profil/surabaya/default.jpg", 
      "ig" : "bungamastiti", "fb" : false, "line" : "bungamastiti" }, 

      {"nama" : "Fadia Afif", 
      "panggilan" : "Fadia", 
      "ttl" : "Jombang, 29 Mei 2001", 
      "jabatan" : "Member", 
      "domisili" : "Surabaya" , 
      "foto" : "../../assets/profil/surabaya/default.jpg", 
      "ig" : "fadiaafifhasan", "fb" : false, "line" : "muhammad04madrid" }, 

      {"nama" : "Dzakirotur Rifdah", 
      "panggilan" : "Rifdah", 
      "ttl" : "Surabaya, 5 Juli 1999", 
      "jabatan" : "Member", 
      "domisili" : "Surabaya" , 
      "foto" : "../../assets/profil/surabaya/rifdah.png", 
      "ig" : "rifdah.dzk", "fb" : false, "line" : "athariqdias" }
    ]
  }
  public getAnggotaMalang(){
    return [
      //Malang
      {"nama" : "Rizki Nurul Arsy", 
      "panggilan" : "Rizki", 
      "ttl" : "Serang, 4 Maret 1998", 
      "jabatan" : "Leader Tanam Pahala", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/mas rizky.jpg", 
      "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Shulhan Darajat", 
      "panggilan" : "Shulhan", 
      "ttl" : "Serang, 28 Februari 1998", 
      "jabatan" : "Leader Celengan Amal", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/massulhan.jpg", 
      "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Galang Putratama", 
      "panggilan" : "Galang", 
      "ttl" : "Jakarta, 01 Februari 1997", 
      "jabatan" : "Web Developer", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/masgalang.jpg", 
      "ig" : "galangptrm", "fb" : false, "line" : false },

      {"nama" : "Rifaldi Raya", 
      "panggilan" : "Rifal", 
      "ttl" : "Bangkalan, 20 Januari 1999", 
      "jabatan" : "Web Developer", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/Rifal.jpg", 
      "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Moh Imam Rosyidi", 
      "panggilan" : "Rosyidi", 
      "ttl" : "Sumenep, 15 November 1999", 
      "jabatan" : "Designer", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/rosi.jpg", 
      "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Khoirul Badriyah", 
      "panggilan" : "Khobar", 
      "ttl" : "Pandeglang, 11 April 1998", 
      "jabatan" : "Social Media Admin", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/mbak Khobar.jpg", 
      "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Nandika Sekar Guamaharani", 
      "panggilan" : "Nandika", 
      "ttl" : "Grobogan, 08 April 1998", 
      "jabatan" : "Treasurer", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/mbakNandika.jpg", 
      "ig" : false, "fb" : false, "line" : false }
    ]
  }

  public getAnggotaSemarang(){
    // Semarang
    return [
      {"nama" : "Trianto", 
      "panggilan" : "Trianto", 
      "ttl" : "Cilacap, 26 Juni 1997", 
      "jabatan" : "Member", 
      "domisili" : "Semarang" , 
      "foto" : "../../assets/profil/semarang/26267.jpg", 
      "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Siti Rohmaniah", 
      "panggilan" : "Rohmaniah", 
      "ttl" : "Wonogiri, 05 November 1997", 
      "jabatan" : "Member", 
      "domisili" : "Semarang" , 
      "foto" : "../../assets/profil/semarang/26268.jpg",
       "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Febryan Taufiq", 
      "panggilan" : "Febry",
       "ttl" : "Jepara, 19 Februari 1998", 
       "jabatan" : "Member", 
       "domisili" : "Semarang" , 
       "foto" : "../../assets/profil/semarang/26266.jpg", 
       "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Mochammad Iffan Zulfiandri",
       "panggilan" : "Iffan", 
       "ttl" : "Serang, 27 Juni 1998",
       "jabatan" : "Member",
       "domisili" : "Semarang" , 
       "foto" : "../../assets/profil/semarang/1.jpg", 
       "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Dewi Anggraini", 
      "panggilan" : "Dewi", 
      "ttl" : "Kab. Semarang 16 juli 1998", 
      "jabatan" : "Member", 
      "domisili" : "Semarang" , 
      "foto" : "../../assets/profil/semarang/kartun.jpg", 
      "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Muhammad Kautsar Aqsa", 
      "panggilan" : "Aqsa", 
      "ttl" : "Jakarta, 25 Agustus 1998", 
      "jabatan" : "Member", 
      "domisili" : "Semarang" , 
      "foto" : "../../assets/profil/semarang/26264.jpg", 
      "ig" : false, "fb" : false, "line" : false }, 

      {"nama" : "Alifia Hanifah Mumtaz", 
      "panggilan" : "Alifia", 
      "ttl" : "Serang, 02 September 1998", 
      "jabatan" : "Member", 
      "domisili" : "Semarang" , 
      "foto" : "../../assets/profil/semarang/26265.jpg", 
      "ig" : false, "fb" : false, "line" : false } 
     
    ]
  }

  public getAnggotaSurabaya(){
    // Surabaya
    return [
      {"nama" : "Farah Noviandini", 
      "panggilan" : "Farah", 
      "ttl" : "Bangkalan, 6 November 1998", 
      "jabatan" : "Member", 
      "domisili" : "Surabaya" , 
      "foto" : "../../assets/profil/surabaya/farah.png", 
      "ig" : "farahnoviandini", "fb" : false, "line" : "farahnoviandini" }, 

      {"nama" : "Alifah Salsabila", 
      "panggilan" : "Alifah", 
      "ttl" : "Surabaya, 18 Juni 1999", 
      "jabatan" : "Member", 
      "domisili" : "Surabaya" , 
      "foto" : "../../assets/profil/surabaya/default.jpg", 
      "ig" : "alfhsalsa", "fb" : false, "line" : "alfhsalsa" }, 

      {"nama" : "Athariq Dias Muyasar", 
      "panggilan" : "Dias", 
      "ttl" : "Bekasi, 20 Oktober 1999", 
      "jabatan" : "Member", 
      "domisili" : "Surabaya" , 
      "foto" : "../../assets/profil/surabaya/dias.png", 
      "ig" : "athariqdiasm", "fb" : false, "line" : "athariqdm" },

      {"nama" : "Bunga Mastiti Darmawan", 
      "panggilan" : "Bunga", 
      "ttl" : "Jombang, 12 April 2000", 
      "jabatan" : "Member", 
      "domisili" : "Surabaya" , 
      "foto" : "../../assets/profil/surabaya/default.jpg", 
      "ig" : "bungamastiti", "fb" : false, "line" : "bungamastiti" }, 

      {"nama" : "Fadia Afif", 
      "panggilan" : "Fadia", 
      "ttl" : "Jombang, 29 Mei 2001", 
      "jabatan" : "Member", 
      "domisili" : "Surabaya" , 
      "foto" : "../../assets/profil/surabaya/default.jpg", 
      "ig" : "fadiaafifhasan", "fb" : false, "line" : "muhammad04madrid" }, 

      {"nama" : "Dzakirotur Rifdah", 
      "panggilan" : "Rifdah", 
      "ttl" : "Surabaya, 5 Juli 1999", 
      "jabatan" : "Member", 
      "domisili" : "Surabaya" , 
      "foto" : "../../assets/profil/surabaya/rifdah.png", 
      "ig" : "rifdah.dzk", "fb" : false, "line" : "athariqdias" }
      
    ]
  }

}
