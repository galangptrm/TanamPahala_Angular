import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnggotaService {

  constructor() { }

  public getAnggotaMalang(){
    return [
      //Malang
      {"nama" : "Rizki Nurul Arsy", 
      "panggilan" : "Rizki", 
      "ttl" : "Serang, 4 Maret 1998", 
      "jabatan" : "Leader Tanam Pahala", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/mas rizky.jpg", 
      "ig" : "#", "fb" : "#", "line" : "#" }, 

      {"nama" : "Shulhan Darajat", 
      "panggilan" : "Shulhan", 
      "ttl" : "Serang, 28 Februari 1998", 
      "jabatan" : "Leader Celengan Amal", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/massulhan.jpg", 
      "ig" : "#", "fb" : "#", "line" : "#" }, 

      {"nama" : "Galang Putratama", 
      "panggilan" : "Galang", 
      "ttl" : "Jakarta, 01 Februari 1997", 
      "jabatan" : "Web Developer", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/masgalang.jpg", 
      "ig" : "sasdfsdf", "fb" : "sdfdsf", "line" : "sdfsdfsdf" },

      {"nama" : "Rifaldi Raya", 
      "panggilan" : "Rifal", 
      "ttl" : "Bangkalan, 20 Januari 1999", 
      "jabatan" : "Web Developer", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/Rifal.jpg", 
      "ig" : "#", "fb" : "#", "line" : "#" }, 

      {"nama" : "Moh Imam Rosyidi", 
      "panggilan" : "Rosyidi", 
      "ttl" : "Sumenep, 15 November 1999", 
      "jabatan" : "Designer", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/rosi.jpg", 
      "ig" : "#", "fb" : "#", "line" : "#" }, 

      {"nama" : "Khoirul Badriyah", 
      "panggilan" : "Khobar", 
      "ttl" : "Pandeglang, 11 April 1998", 
      "jabatan" : "Social Media Admin", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/mbak Khobar.jpg", 
      "ig" : "#", "fb" : "#", "line" : "#" }, 

      {"nama" : "Nandika Sekar Guamaharani", 
      "panggilan" : "Nandika", 
      "ttl" : "Grobogan, 08 April 1998", 
      "jabatan" : "Treasurer", 
      "domisili" : "Malang" , 
      "foto" : "../../assets/profil/malang/mbakNandika.jpg", 
      "ig" : "#", "fb" : "#", "line" : "#" }
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
      "ig" : "#", "fb" : "#", "line" : "#" }, 

      {"nama" : "Siti Rohmaniah", 
      "panggilan" : "Rohmaniah", 
      "ttl" : "Wonogiri, 05 November 1997", 
      "jabatan" : "Member", 
      "domisili" : "Semarang" , 
      "foto" : "../../assets/profil/semarang/26268.jpg",
       "ig" : "#", "fb" : "#", "line" : "#" }, 

      {"nama" : "Febryan Taufiq", 
      "panggilan" : "Febry",
       "ttl" : "Jepara, 19 Februari 1998", 
       "jabatan" : "Member", 
       "domisili" : "Semarang" , 
       "foto" : "../../assets/profil/semarang/26266.jpg", 
       "ig" : "#", "fb" : "#", "line" : "#" }, 

      {"nama" : "Mochammad Iffan Zulfiandri",
       "panggilan" : "Iffan", 
       "ttl" : "Serang, 27 Juni 1998",
       "jabatan" : "Member",
       "domisili" : "Semarang" , 
       "foto" : "../../assets/profil/semarang/1.jpg", 
       "ig" : "#", "fb" : "#", "line" : "#" }, 

      {"nama" : "Dewi Anggraini", 
      "panggilan" : "Dewi", 
      "ttl" : "Kab. Semarang 16 juli 1998", 
      "jabatan" : "Member", 
      "domisili" : "Semarang" , 
      "foto" : "../../assets/profil/semarang/kartun.jpg", 
      "ig" : "#", "fb" : "#", "line" : "#" }, 

      {"nama" : "Muhammad Kautsar Aqsa", 
      "panggilan" : "Aqsa", 
      "ttl" : "Jakarta, 25 Agustus 1998", 
      "jabatan" : "Member", 
      "domisili" : "Semarang" , 
      "foto" : "../../assets/profil/semarang/26264.jpg", 
      "ig" : "#", "fb" : "#", "line" : "#" }, 

      {"nama" : "Alifia Hanifah Mumtaz", 
      "panggilan" : "Alifia", 
      "ttl" : "Serang, 02 September 1998", 
      "jabatan" : "Member", 
      "domisili" : "Semarang" , 
      "foto" : "../../assets/profil/semarang/26265.jpg", 
      "ig" : "#", "fb" : "#", "line" : "#" } 
     
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
      "foto" : "../../assets/profil/surabaya/default.jpg", 
      "ig" : "farahnoviandini", "fb" : "#", "line" : "farahnoviandini" }, 

      {"nama" : "Alifah Salsabila", 
      "panggilan" : "Alifah", 
      "ttl" : "Surabaya, 18 Juni 1999", 
      "jabatan" : "Member", 
      "domisili" : "Surabaya" , 
      "foto" : "../../assets/profil/surabaya/default.jpg", 
      "ig" : "alfhsalsa", "fb" : "#", "line" : "alfhsalsa" }, 

      {"nama" : "Athariq Dias Muyasar", 
      "panggilan" : "Athariq", 
      "ttl" : "Bekasi, 20 Oktober 1999", 
      "jabatan" : "Member", 
      "domisili" : "Surabaya" , 
      "foto" : "../../assets/profil/surabaya/default.jpg", 
      "ig" : "athariqdiasm", "fb" : "#", "line" : "athariqdm" },

      {"nama" : "Bunga Mastiti Darmawan", 
      "panggilan" : "Bunga", 
      "ttl" : "Jombang, 12 April 2000", 
      "jabatan" : "Member", 
      "domisili" : "Surabaya" , 
      "foto" : "../../assets/profil/surabaya/default.jpg", 
      "ig" : "bungamastiti", "fb" : "#", "line" : "bungamastiti" }, 

      {"nama" : "Fadia Afif", 
      "panggilan" : "Fadia", 
      "ttl" : "Jombang, 29 Mei 2001", 
      "jabatan" : "Member", 
      "domisili" : "Surabaya" , 
      "foto" : "../../assets/profil/surabaya/default.jpg", 
      "ig" : "fadiaafifhasan", "fb" : "#", "line" : "muhammad04madrid" }, 

      {"nama" : "Dzakirotur Rifdah", 
      "panggilan" : "Dzakirotur", 
      "ttl" : "Surabaya, 5 Juli 1999", 
      "jabatan" : "Member", 
      "domisili" : "Surabaya" , 
      "foto" : "../../assets/profil/surabaya/default.jpg", 
      "ig" : "rifdah.dzk", "fb" : "#", "line" : "athariqdias" }
      
    ]
  }

}
