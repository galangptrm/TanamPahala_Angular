import { Component, OnInit } from '@angular/core';
import { MitraService } from '../_service/mitra.service';
import { Router } from '@angular/router';

declare var $ : any;

@Component({
  selector: 'app-mitra',
  templateUrl: './mitra.component.html',
  styleUrls: ['./mitra.component.css']
})
export class MitraComponent implements OnInit {

  public mitras = []

  constructor( private _mitraService : MitraService,
               private _router : Router
              ) { }


  ngOnInit() {

    this.mitras = this._mitraService.getMitraAll()
    console.log(this.mitras);
    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }

}
