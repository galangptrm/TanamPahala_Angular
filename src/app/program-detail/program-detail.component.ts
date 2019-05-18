import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../_service/program.service';
import { ActivatedRoute } from '@angular/router'; 

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
    let get_post = this._programService.getPost(post_slug);
    get_post.subscribe((resp : any)=>{
      console.log(resp);
      this.post_data = resp;
      // this.post_content_html = this.escapeHtml(resp.data.content_html);
      
    });
  }

  // escapeHtml(str1){
  //   let str2 = str1.replace(/"/gi, "&quout;");
  //   let str3 = str2.replace(/&/gi, "&amp;");
  //   let str4 = str3.replace(/</gi, "&lt;");
  //   let str5 = str4.replace(/>/gi, "&gt;");
  //   console.log(str5);
  //   return str5;
  // }

}
