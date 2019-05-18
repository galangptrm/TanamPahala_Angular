import { Component, OnInit } from '@angular/core';
import { BerandaService } from '../_service/beranda.service';

declare var $ : any

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

  quotes : string

  public displayable = true

  public galleries = []
  public statistiks = []
  public mitras = []
  
  constructor( private _berandaService : BerandaService ) {
    
  }
  
  ngOnInit() {
    this.galleries = this._berandaService.getGallery()
    this.statistiks = this._berandaService.getStatistik()
    this.mitras = this._berandaService.getMitra()
  }

  onClick(value){
    this.quotes = value
  }

  onClick_gallery(value){

  }

  ngAfterViewInit(){
    $('.materialboxed').materialbox();
    $('.carousel').carousel({
      padding:100,
			dist:0,
			indicators:true,
    });
    $('.modal').modal({
      opacity:0.8,
      dismissible:false,
      preventScrolling:false,
      endingTop:'15%'
  });
  }

}
