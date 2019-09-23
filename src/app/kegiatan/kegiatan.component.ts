import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../_service/program.service';
import { Router } from '@angular/router';

declare var $ : any

@Component({
  selector: 'app-kegiatan',
  templateUrl: './kegiatan.component.html',
  styleUrls: ['./kegiatan.component.css']
})
export class KegiatanComponent implements OnInit {

  quotes : string

  public posts = []
  
  constructor( 
              private _programService : ProgramService,
              private _router : Router ) {
    
  }
  
  ngOnInit() {

    let get_post = this._programService.getProgramImg(10);
    get_post.subscribe((resp : any)=>{
      console.log(resp);
      
      this.posts = resp;
    });

    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }

  onClick(value){
    this.quotes = value
  }

  onClick_gallery(value){

  }

  ngAfterViewInit(){

  }

  goToPostDetail(data){
    this._router.navigate(['/program', data.slug]);
  }

}
