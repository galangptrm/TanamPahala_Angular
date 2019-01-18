export class Anggota {
    
  private nama        : string
  private jabatan     : string

  private tempatLahir? : string
  private tglLahir?    : string
  private jurusan?     : string
  private angkatan?    : number

  constructor(nama : string, jabatan : string, 
    tempatLahir?, tglLahir?, 
    jurusan?, angkatan? : number) {
    nama = this.nama
    jabatan = this.jabatan
    tempatLahir = this.tempatLahir
    tglLahir = this.tglLahir
    jurusan = this.jurusan
    angkatan = this.angkatan
  }

    getnama(): string {
        return this.nama;
    }

    setnama(value: string) {
        this.nama = value;
    }

    getjabatan(): string {
        return this.jabatan;
    }

    setjabatan(value: string) {
        this.jabatan = value;
    }

    gettempatLahir(): string {
        return this.tempatLahir;
    }

    settempatLahir(value: string) {
        this.tempatLahir = value;
    }

    gettglLahir(): string {
        return this.tglLahir;
    }

    settglLahir(value: string) {
        this.tglLahir = value;
    }

    getjurusan(): string {
        return this.jurusan;
    }

    setjurusan(value: string) {
        this.jurusan = value;
    }

    getangkatan(): number {
        return this.angkatan;
    }

    setangkatan(value: number) {
        this.angkatan = value;
    }
  
}

