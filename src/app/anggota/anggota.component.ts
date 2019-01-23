import { Component, OnInit } from '@angular/core';
import { AnggotaService } from '../anggota.service';

@Component({
  selector: 'app-anggota',
  templateUrl: './anggota.component.html',
  styleUrls: ['./anggota.component.css']
})

export class AnggotaComponent implements OnInit {

  public anggotas = []

  constructor(private _anggotaService : AnggotaService) { }

  ngOnInit() {
    this.anggotas = this._anggotaService.getAnggota()
  }

}
