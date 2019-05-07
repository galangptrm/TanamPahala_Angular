import { Component, OnInit } from '@angular/core';
import { FooterService } from '../_service/footer.service';

declare var $ : any

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public foot : FooterService) { }

  ngOnInit() {
    $('.materialboxed').materialbox();
  }

}
