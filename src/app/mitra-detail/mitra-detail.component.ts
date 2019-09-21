import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-mitra-detail',
  templateUrl: './mitra-detail.component.html',
  styleUrls: ['./mitra-detail.component.css']
})
export class MitraDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.parallax').parallax();
      $('.materialboxed').materialbox();
    });
  }

}
