import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../_service/program.service';
import { Router } from '@angular/router';
// import { forEach } from '@angular/router/src/utils/collection';

declare var $ : any

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})



export class ProgramComponent implements OnInit {

  public posts = []

  constructor( private _programService : ProgramService, 
               private _router : Router) { }

  ngOnInit() {
    
    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }

  goToPostDetail(data){
    this._router.navigate(['/program', data.slug]);
  }
}
