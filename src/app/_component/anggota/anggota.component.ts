import { Component, OnInit } from '@angular/core';
import { AnggotaService } from '../../_service/anggota/anggota.service';

@Component({
  selector: 'app-anggota',
  templateUrl: './anggota.component.html',
  styleUrls: ['./anggota.component.css']
})

export class AnggotaComponent implements OnInit {

  public anggotaMalangs = []
  public anggotaSemarangs = []

  constructor(private _anggotaService : AnggotaService) { }

  ngOnInit() {
    this.anggotaMalangs = this._anggotaService.getAnggotaMalang()
    this.anggotaSemarangs = this._anggotaService.getAnggotaSemarang()
  }

}
