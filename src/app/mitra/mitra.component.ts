import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-mitra',
  templateUrl: './mitra.component.html',
  styleUrls: ['./mitra.component.css']
})
export class MitraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }

}
