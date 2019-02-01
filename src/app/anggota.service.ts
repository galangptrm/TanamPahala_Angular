import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnggotaService {

  constructor() { }

  public getAnggota(){
    return [
      //Malang
      {"nama" : "Galang Putratama", "panggilan" : "Galang", "ttl" : "Jakarta, 01 Februari 1997", "jabatan" : "Web Developer", "domisili" : "Malang" , "foto" : "../../assets/profil/masgalang.jpg" },
      {"nama" : "Shulhan Darajat", "panggilan" : "Shulhan", "ttl" : "Serang, 28 Februari 1998", "jabatan" : "Leader Project Celengan Amal", "domisili" : "Malang" , "foto" : "../../assets/profil/massulhan.jpg" }, 
      {"nama" : "Rizki Nurul Arsy", "panggilan" : "Rizki", "ttl" : "Serang, 4 Maret 1998", "jabatan" : "Leader Tanam Pahala", "domisili" : "Malang" , "foto" : "../../assets/profil/masrizky2.jpg" }, 
      {"nama" : "Rifaldi Raya", "panggilan" : "Rifal", "ttl" : "Bangkalan, 20 Januari 1999", "jabatan" : "Web Developer", "domisili" : "Malang" , "foto" : "../../assets/profil/Rifal.jpg" }, 
      {"nama" : "Moh Imam Rosyidi", "panggilan" : "Rosyidi", "ttl" : "Sumenep, 15 November 1999", "jabatan" : "Designer", "domisili" : "Malang" , "foto" : "../../assets/profil/rosi.jpg" }, 
      {"nama" : "Khoirul Badriyah", "panggilan" : "Khobar", "ttl" : "Pandeglang, 11 April 1998", "jabatan" : "Social Media Admin", "domisili" : "Malang" , "foto" : "../../assets/profil/mbak Khobar.jpg" }, 
      {"nama" : "Nandika Sekar Guamaharani", "panggilan" : "Nandika", "ttl" : "Grobogan, 08 April 1998", "jabatan" : "Treasurer ", "domisili" : "Malang" , "foto" : "../../assets/profil/mbakNandika.png" }, 
      
      //Semarang
      {"nama" : "Trianto", "panggilan" : "Trianto", "ttl" : "Cilacap, 26 Juni 1997", "jabatan" : "Member", "domisili" : "Semarang" , "foto" : "../../assets/profil/semarang/26267.jpg" }, 
      {"nama" : "Siti Rohmaniah", "panggilan" : "Rohmaniah", "ttl" : "Wonogiri, 05 November 1997", "jabatan" : "Member", "domisili" : "Semarang" , "foto" : "../../assets/profil/semarang/26268.jpg" }, 
      {"nama" : "Febryan Taufiq", "panggilan" : "Febry", "ttl" : "Jepara, 19 Februari 1998", "jabatan" : "Member", "domisili" : "Semarang" , "foto" : "../../assets/profil/semarang/26266.jpg" }, 
      {"nama" : "Mochammad Iffan Zulfiandri", "panggilan" : "Iffan", "ttl" : "Serang, 27 Juni 1998", "jabatan" : "Member", "domisili" : "Semarang" , "foto" : "../../assets/profil/semarang/1.jpg" }, 
      {"nama" : "Dewi Anggraini", "panggilan" : "Dewi", "ttl" : "Kab. Semarang 16 juli 1998", "jabatan" : "Member", "domisili" : "Semarang" , "foto" : "../../assets/profil/semarang/kartun.jpg" }, 
      {"nama" : "Muhammad Kautsar Aqsa", "panggilan" : "Aqsa", "ttl" : "Jakarta, 25 Agustus 1998", "jabatan" : "Member", "domisili" : "Semarang" , "foto" : "../../assets/profil/semarang/26264.jpg" }, 
      {"nama" : "Alifia Hanifah Mumtaz", "panggilan" : "Alifia", "ttl" : "Serang, 02 September 1998", "jabatan" : "Member", "domisili" : "Semarang" , "foto" : "../../assets/profil/semarang/26265.jpg" } 
     
    ]

  }

}
