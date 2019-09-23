import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MitraService {

  constructor() { }

  public getMitraAll(){
    return [
      //Malang
      {
      "id" : "1", 
      "nama_mitra" : "Aksi Cepat Tanggap", 
      "slug_mitra" : "aksi-cepat-tanggap", 
      "akronim_mitra" : "ACT", 
      "alamat" : "Ruko Indah Ciliwung Jalan Ciliwung No.10 Kav.5, Malang", 
      "alamat_url" : "https://www.google.co.id/maps/place/Aksi+Cepat+Tanggap+Malang/@-7.9528139,112.6388619,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd629c856d7f397:0xcfc9bd9a5cc66149!8m2!3d-7.9528192!4d112.6410506", 
      "deskripsi" : "Lembaga Swadaya Masyarakat (LSM) yang bergerak di bidang social movement", 
      "img_logo" : "../../assets/mitra/act/act.png", 
      "imgs" : [
        "../../assets/dokumentasi/Act-square.jpg"
      ],
      "ig" : "actmalang", "wa" : false, "web" : "http://act.id" }, 
      {
      "id" : "2", 
      "nama_mitra" : "Harapan Dhuafa", 
      "slug_mitra" : "harapan-dhuafa", 
      "akronim_mitra" : "Harfa", 
      "alamat" : "Jalan Ciwaru Raya, Komplek Pondok Citra 1 No 1b, Serang, Banten.", 
      "alamat_url" : "https://www.google.co.id/maps/place/LAZ+Harfa+Provinsi+Banten/@-6.131289,106.1636089,17z/data=!3m1!4b1!4m5!3m4!1s0x2e41f5310ff65747:0xf5775aabaaa6aadd!8m2!3d-6.1312943!4d106.1657976", 
      "deskripsi" : "Lembaga Swadaya Masyarakat (LSM) yang bergerak di bidang social movement", 
      "img_logo" : "../../assets/mitra/harfaa/harfaa.png",
      "imgs" : [
        "../../assets/dokumentasi/18289.jpg"
      ],
      "ig" : "laz.harfa", "wa" : "087774103441", "web" : "http://lazharfa.org/" }, 
      {
      "id" : "3", 
      "nama_mitra" : "Yayasan Sahabat Anak Kanker Malang", 
      "slug_mitra" : "yayasan-sahabat-anak-kanker-malang", 
      "akronim_mitra" : false, 
      "alamat" : "IRNA IV RS Saiful Anwar Malang", 
      "alamat_url" : "https://www.google.co.id/maps/place/Sahabat+Anak+Kanker/@-7.9725948,112.6307838,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd62970db64e06d:0x7f911c204e676f60!8m2!3d-7.9726001!4d112.6329725", 
      "deskripsi" : "Lembaga sosial yang memberikan bantuan khusus untuk anak penyandang kanker di Kota Malang", 
      "img_logo" : "../../assets/mitra/sahabatanakkankermalang/logo.jpg", 
      "imgs" : [
        "../../assets/mitra/sahabatanakkankermalang/image6.jpg",
        "../../assets/mitra/sahabatanakkankermalang/image8.jpg",
        "../../assets/mitra/sahabatanakkankermalang/image10.jpg"
      ],
      "ig" : "sahabatanakkanker", "wa" : "089523974666", "web" : "https://sahabatanakkanker.wordpress.com/" }, 
      {
      "id" : "4", 
      "nama_mitra" : "Malang Cat Survival", 
      "slug_mitra" : "malang-cat-survival", 
      "akronim_mitra" : false, 
      "alamat" : "Alun - Alun Kota Malang", 
      "alamat_url" : "https://www.google.co.id/maps/place/Alun+Alun+Malang/@-7.9825193,112.6286126,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd628181bac60c7:0xe71f0ef69b3810b4!8m2!3d-7.9825246!4d112.6308013", 
      "deskripsi" : "Lembaga sosial yang bergerak dalam perlindungan dan pemeliharaan kucing terlantar di Kota Malang", 
      "img_logo" : "../../assets/mitra/malangcatsurvival/logo.jpg", 
      "imgs" : [
        "../../assets/mitra/malangcatsurvival/image1.png",
        "../../assets/mitra/malangcatsurvival/image2.png",
        "../../assets/mitra/malangcatsurvival/image46.png"
      ],
      "ig" : "malangcatsurvival", "wa" : false, "web" : false },
      {
      "id" : "5", 
      "nama_mitra" : "Malang Potrait", 
      "slug_mitra" : "malang-potrait", 
      "akronim_mitra" : false, 
      "alamat" : "Kota Malang", 
      "alamat_url" : "https://www.google.co.id/maps/place/Malang,+Malang+City,+East+Java/@-7.9784695,112.5617423,12z/data=!3m1!4b1!4m5!3m4!1s0x2dd62822063dc2fb:0x78879446481a4da2!8m2!3d-7.9666204!4d112.6326321", 
      "deskripsi" : "Media yang memberikan potret gallery kehidupan dunia malang mulai dari wisata alam, berita sampai dengan dunia kuliner di Malang", 
      "img_logo" : "../../assets/mitra/malangpotrait/logo.jpg",
      "imgs" : [
        "../../assets/mitra/malangpotrait/image38.jpg",
        "../../assets/mitra/malangpotrait/image40.jpg",
        "../../assets/mitra/malangpotrait/image42.jpg"
      ],
      "ig" : "malangportrait", "wa" : "08977036465", "web" : false },
      {
      "id" : "6", 
      "nama_mitra" : "Sendal Bunda", 
      "slug_mitra" : "sendal-bunda", 
      "akronim_mitra" : false, 
      "alamat" : "Jalan Empat Lima Kaujon Singandaru Indah, Serang Banten", 
      "alamat_url" : "https://www.google.co.id/maps/search/Jalan+Empat+Lima+Kaujon+Singandaru+Indah/@-6.1219132,106.1427436,17z/data=!3m1!4b1", 
      "deskripsi" : "Usaha mikro yang bergerak dalam bidang usaha sendal dan sepatu", 
      "img_logo" : "../../assets/mitra/sendalbunda/logo.jpg", 
      "imgs" : [
        "../../assets/mitra/sendalbunda/image26.jpg",
        "../../assets/mitra/sendalbunda/image28.jpg",
        "../../assets/mitra/sendalbunda/image31.jpg",
        "../../assets/mitra/sendalbunda/image33.jpg"
      ],
      "ig" : false, "wa" : "087808790189", "web" : false },
      {
      "id" : "7", 
      "nama_mitra" : "Pojok Printing", 
      "slug_mitra" : "pojok-printing", 
      "akronim_mitra" : false, 
      "alamat" : "Gerbang Teknik UB Di samping Gor Bulu Tangkis", 
      "alamat_url" : "https://www.google.co.id/maps/place/Pojok+Printing/@-7.9487586,112.6111502,18.57z/data=!4m5!3m4!1s0x2e7882710afc1fd9:0xb0f09fd2f6cafc23!8m2!3d-7.948823!4d112.611324", 
      "deskripsi" : "Penyedia jasa layanan fotokopi dengan harga murah untuk aneka keperluan perkuliahan dengan fleksibilitas akses melalui aneka sosial media dan tempat yang strategis dekat dengan gerbang teknik universitas brawijaya.", 
      "img_logo" : "../../assets/mitra/pojokprinting/logo.jpg", 
      "imgs" : [
        "../../assets/mitra/pojokprinting/image17.jpg"
      ],
      "ig" : false, "wa" : "08816286154", "web" : false },
      {
      "id" : "8", 
      "nama_mitra" : "Geraiwika", 
      "slug_mitra" : "geraiwika", 
      "akronim_mitra" : false, 
      "alamat" : "Jalan Kertoseno Nomer 157 B, Malang", 
      "alamat_url" : false, 
      "deskripsi" : "Usaha yang bergerak di bidang women needs seperti kaoskaki, masker wajah dan lainnya", 
      "img_logo" : "../../assets/mitra/geraiwika/logo.jpg",
      "imgs" : [
        "../../assets/mitra/geraiwika/image11.jpg",
        "../../assets/mitra/geraiwika/image13.jpg",
        "../../assets/mitra/geraiwika/image15.jpg"
      ],
      "ig" : "geraiwika", "wa" : "082132305600", "web" : false },
      {
      "id" : "9", 
      "nama_mitra" : "Banten Catering", 
      "slug_mitra" : "banten-catering", 
      "akronim_mitra" : false, 
      "alamat" : "Kp Sahirah, Desa Bendung, RT/RW 14/02 KelurahanBendung, Kecamatan Kasemen, Kota Serang", 
      "alamat_url" : "https://www.google.co.id/maps/place/Serang,+Serang+City,+Banten/@-6.1106106,106.1415103,14z/data=!3m1!4b1!4m5!3m4!1s0x2e418b0dbb534a61:0x301e8f1fc28b8d0!8m2!3d-6.1169309!4d106.1538519", 
      "deskripsi" : "Penyedia jasa layanan aneka pembuatan catering,mulai dari catering event, sampai dengan catering seminar mahasiswa dengan harga termurah dan kualitas terbaik di Kota Serang.", 
      "img_logo" : "../../assets/mitra/bantencatering/logo.png",
      "imgs" : [
        "../../assets/mitra/bantencatering/image3.jpg",
        "../../assets/mitra/bantencatering/image47.jpg",
        "../../assets/mitra/bantencatering/image48.jpg",
        "../../assets/mitra/bantencatering/image5.jpg",
        "../../assets/mitra/bantencatering/image7.jpg"
      ],
      "ig" : "bantencatering", "wa" : "087871207892", "web" : false },
      {
      "id" : "10", 
      "nama_mitra" : "Ragam Bingkai", 
      "slug_mitra" : "ragam-bingkai", 
      "akronim_mitra" : false, 
      "alamat" : "Jalan Gajayana Gang 1 C No. 708 A Malang", 
      "alamat_url" : "https://www.google.co.id/maps/place/Jl.+Gajayana,+Dinoyo,+Kec.+Lowokwaru,+Kota+Malang,+Jawa+Timur+65145/@-7.9456214,112.6074094,17z/data=!3m1!4b1!4m5!3m4!1s0x2e78827242de16ab:0x4646fe955c58667e!8m2!3d-7.9456267!4d112.6095981", 
      "deskripsi" : "Penyedia aneka produk dekorasi rumah tangga sampai dengan perkantoran di Kota Malang dengan variansi produk yang beragam.", 
      "img_logo" : "../../assets/mitra/ragambingkai/ragambingkai.png", 
      "imgs" : [
        "../../assets/mitra/ragambingkai/image39.jpg",
        "../../assets/mitra/ragambingkai/image41.jpg",
        "../../assets/mitra/ragambingkai/image43.jpg"
      ],
      "ig" : "ragambingkai", "wa" : "08977036465", "web" : false },
      {
      "id" : "11", 
      "nama_mitra" : "Martabak Lumpia Malang", 
      "slug_mitra" : "martabak-lumpia-malang", 
      "akronim_mitra" : "Maklum Malang", 
      "alamat" : "Jl. Kerto Raharjo No.69 Malang", 
      "alamat_url" : "https://www.google.co.id/maps/place/Maklum+Malang+-+Martabak+Lumpia+Malang/@-7.9477745,112.6079492,17z/data=!3m1!4b1!4m5!3m4!1s0x2e78839e96299645:0x49a622be3759d3c1!8m2!3d-7.9477798!4d112.6101379", 
      "deskripsi" : "Merupakan usaha yang bergerak di bidang kuliner dengan menawarkan produk-produk kuliner inovatif yang menggabungkan makanan tradisional indonesia dan jepang dengan harga dan kualitas mahasiswa", 
      "img_logo" : "../../assets/mitra/maklum/logo.png", 
      "imgs" : [
        "../../assets/mitra/maklum/image32.png",
        "../../assets/mitra/maklum/image35.png"
      ],
      "ig" : "maklummalang", "wa" : "089682313636", "web" : false },
      {
      "id" : "12", 
      "nama_mitra" : "Kedai Sumochi", 
      "slug_mitra" : "kedai-sumochi", 
      "akronim_mitra" : "Sumochi", 
      "alamat" : "Jalan Kalpataru No 94 B, Malang", 
      "alamat_url" : "https://www.google.co.id/maps/place/Kedai+Sumochi/@-7.9489727,112.6253013,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd629cf0d2d3351:0x39697a5e0af82212!8m2!3d-7.948978!4d112.62749", 
      "deskripsi" : "Restaurant bernuansa asia timur dengan sentuhan nilai-nilai islam di dekorasi interiornya. Produk-produk makanan yang menggugah selera dengan lokasi yang instagramable banget", 
      "img_logo" : "../../assets/mitra/sumochi/logo.jpg", 
      "imgs" : [
        "../../assets/mitra/sumochi/image24.png",
        "../../assets/mitra/sumochi/image27.png",
        "../../assets/mitra/sumochi/image29.png",
        "../../assets/mitra/sumochi/image34.png"
      ],
      "ig" : "kedaisumochi", "wa" : "082335522623", "web" : "https://sumochi.business.site/" },
      {
      "id" : "13", 
      "nama_mitra" : "Fardiaz Catering", 
      "slug_mitra" : "fardiaz-catering", 
      "akronim_mitra" : false, 
      "alamat" : "Jalan MT.Hariyono Gang Brawijaya 1 No.62 depan fakultas Ilmu Administrasi Universitas Brawijaya", 
      "alamat_url" : "https://www.google.co.id/maps/place/MT+Haryono/@-7.9467341,112.6104329,17z/data=!3m1!4b1!4m5!3m4!1s0x2e788273e64be8d3:0x92076cb1ce699120!8m2!3d-7.9467394!4d112.6126216", 
      "deskripsi" : "Restaurant bernuansa asia timur dengan sentuhan nilai-nilai islam di dekorasi interiornya. Produk-produk makanan yang menggugah selera dengan lokasi yang instagramable banget", 
      "img_logo" : "../../assets/mitra/fardiazcatering/logo.png", 
      "imgs" : [
        "../../assets/mitra/fardiazcatering/image20.jpg",
        "../../assets/mitra/fardiazcatering/image21.jpg",
        "../../assets/mitra/fardiazcatering/image23.jpg"
      ],
      "ig" : "fardiazcatering", "wa" : "089661191919", "web" : false }
    ]
  }
}
