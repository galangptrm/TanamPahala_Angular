import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../_service/program.service';
// import { forEach } from '@angular/router/src/utils/collection';

declare var $ : any

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})



export class ProgramComponent implements OnInit {

  public posts = []

  constructor( private _programService : ProgramService) { }

  ngOnInit() {
    // this.dokumentasis = this._programService.getDokumentasi();
    let get_post = this._programService.getProgramImg();
    get_post.subscribe((resp : any)=>{
      console.log(resp);
      this.posts = resp;
    });
  }
}
