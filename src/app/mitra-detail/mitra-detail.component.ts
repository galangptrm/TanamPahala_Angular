import { Component, OnInit } from '@angular/core';
import { MitraService } from '../_service/mitra.service';
import { ActivatedRoute } from '@angular/router';


declare var $ : any;

@Component({
  selector: 'app-mitra-detail',
  templateUrl: './mitra-detail.component.html',
  styleUrls: ['./mitra-detail.component.css']
})

export class MitraDetailComponent implements OnInit {

  public mitra_data
  
  constructor(private _mitraService : MitraService,
              private _router : ActivatedRoute) { }

  ngOnInit() {
    let mitra_slug = this._router.snapshot.paramMap.get('slug');
    
    let get_mitra = this._mitraService.getMitraDetail(mitra_slug); 
    get_mitra.subscribe((resp:any)=>{
      console.log(resp)
      this.mitra_data = resp
    })

    $(document).ready(function(){
      $('.parallax').parallax();
      $('.materialboxed').materialbox();
    });
  }

}
