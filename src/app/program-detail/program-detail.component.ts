import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../_service/program.service';
import { ActivatedRoute } from '@angular/router'; 

declare var $ : any

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})

export class ProgramDetailComponent implements OnInit {

  public post_data;
  public post_content_html;

  constructor(private _programService : ProgramService,
              private _router : ActivatedRoute) { }

  ngOnInit() {
    let post_slug = this._router.snapshot.paramMap.get('slug');
    let get_kegiatan = this._programService.getPost(post_slug);
    get_kegiatan.subscribe((resp : any)=>{
      console.log(resp);
      this.post_data = resp;
    });

    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }

}
