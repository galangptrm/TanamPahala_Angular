import { Component, OnInit } from '@angular/core';
import { BerandaService } from '../_service/beranda.service';
import { ProgramService } from '../_service/program.service';
import { Router } from '@angular/router';

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
  public posts = []
  
  constructor( private _berandaService : BerandaService,
              private _programService : ProgramService,
              private _router : Router ) {
    
  }
  
  ngOnInit() {
    this.galleries = this._berandaService.getGallery()
    this.statistiks = this._berandaService.getStatistik()
    this.mitras = this._berandaService.getMitra()

    let get_post = this._programService.getProgramImg(4);
    get_post.subscribe((resp : any)=>{
      console.log(resp);
      this.posts = resp;
    });

    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }

  // onClick(value){
  //   this.quotes = value
  // }

  onClick_gallery(value){

  }

  ngAfterViewInit(){
    // $('.materialboxed').materialbox();
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

  goToPostDetail(data){
    this._router.navigate(['/program', data.slug]);
  }

}
