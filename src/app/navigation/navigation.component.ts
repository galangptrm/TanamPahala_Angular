import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../_service/navbar.service';

declare var $ : any

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  constructor(public nav : NavbarService) {  }
  
  ngOnInit() {
    $(document).ready(function(){
      $(".dropdown-trigger").dropdown();
    });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    $('.sidenav').sidenav()
  }

}
