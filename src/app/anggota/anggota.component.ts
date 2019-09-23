import { Component, OnInit } from '@angular/core';
import { AnggotaService } from '../_service/anggota.service';

declare var $ : any;

@Component({
  selector: 'app-anggota',
  templateUrl: './anggota.component.html',
  styleUrls: ['./anggota.component.css']
})

export class AnggotaComponent implements OnInit {

  public anggotaAlls = []
  public anggotaMalangs = []
  public anggotaSemarangs = []
  public anggotaSurabayas = []

  constructor(private _anggotaService : AnggotaService) { }

  ngOnInit() {
    this.anggotaAlls = this._anggotaService.getAnggotaAll()
    this.anggotaMalangs = this._anggotaService.getAnggotaMalang()
    this.anggotaSemarangs = this._anggotaService.getAnggotaSemarang()
    this.anggotaSurabayas = this._anggotaService.getAnggotaSurabaya()

    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }

}
