import { Component, OnInit } from '@angular/core';
import { AnggotaService } from '../_service/anggota.service';

@Component({
  selector: 'app-anggota',
  templateUrl: './anggota.component.html',
  styleUrls: ['./anggota.component.css']
})

export class AnggotaComponent implements OnInit {

  public anggotaMalangs = []
  public anggotaSemarangs = []
  public anggotaSurabayas = []

  constructor(private _anggotaService : AnggotaService) { }

  ngOnInit() {
    this.anggotaMalangs = this._anggotaService.getAnggotaMalang()
    this.anggotaSemarangs = this._anggotaService.getAnggotaSemarang()
    this.anggotaSurabayas = this._anggotaService.getAnggotaSurabaya()
  }

}
