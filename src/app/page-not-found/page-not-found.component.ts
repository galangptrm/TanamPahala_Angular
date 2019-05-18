import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../_service/navbar.service';
import { FooterService } from '../_service/footer.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})

export class PageNotFoundComponent implements OnInit {
  
  constructor(
    public nav : NavbarService,
    public foot : FooterService
    ) { 
    
  }

  ngOnInit() {
    this.nav.hide()
    this.foot.hide()
  }

}
