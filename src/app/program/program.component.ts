import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../program.service';

declare var $ : any

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})



export class ProgramComponent implements OnInit {

  public dokumentasis = []

  constructor( private _programService : ProgramService ) { }

  ngOnInit() {
    this.dokumentasis = this._programService.getDokumentasi()

  }

}
