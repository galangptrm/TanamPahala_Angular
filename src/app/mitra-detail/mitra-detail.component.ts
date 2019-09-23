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
  public mitra_imgs = []
  
  constructor(private _mitraService : MitraService,
              private _router : ActivatedRoute) { }

  ngOnInit() {

    let mitras = this._mitraService.getMitraAll();

    let slug = this._router.snapshot.paramMap.get('slug');

    for (let i = 0; i < mitras.length; i++) {
      if (mitras[i].slug_mitra == slug) {
        this.mitra_data = mitras[i]

        mitras[i].imgs.forEach(img => {
          this.mitra_imgs.push(img)
        });

        break
      } 
    }

    $(document).ready(function(){
      $('.parallax').parallax();
      $('.materialboxed').materialbox();
    });
  }

}
