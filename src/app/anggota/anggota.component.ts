import { Component, OnInit } from '@angular/core';
import { AnggotaService } from '../_service/anggota.service';

declare var $ : any;

@Component({
  selector: 'app-anggota',
  templateUrl: './anggota.component.html',
  styleUrls: ['./anggota.component.css']
})

export class AnggotaComponent implements OnInit {

  public anggotas = []
  public anggotaAlls = []
  public anggotaMalangs = []
  public anggotaSemarangs = []
  public anggotaSurabayas = []

  constructor(private _anggotaService : AnggotaService) { }

  ngOnInit() {

    let get_anggota = this._anggotaService.getAnggota()
    get_anggota.subscribe((resp:any)=>{
      console.log(resp)

      this.anggotas = resp.data
      if (this.anggotas!=null) {
          this.anggotas.forEach(e => {
            console.log(e)
            if (e.domisili_id == 1) {
              this.anggotaMalangs.push(e)
            }
            else if (e.domisili_id == 2) {
              this.anggotaSemarangs.push(e)
            } else {
              this.anggotaSurabayas.push(e)
            }
          });
      }
      console.log(this.anggotaMalangs)
      console.log(this.anggotaSemarangs)
      console.log(this.anggotaSurabayas)
    })
    
    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }

}
