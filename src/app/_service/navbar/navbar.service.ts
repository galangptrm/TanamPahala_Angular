import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  visibility : boolean

  constructor() { this.visibility = true }

  hide() { this.visibility = false }

  show() { this.visibility = true }

  toggle() { this.visibility = !this.visibility }

  doSomething(){

  }
}
