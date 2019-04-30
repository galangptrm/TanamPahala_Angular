import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { AnggotaService } from './_service/anggota/anggota.service';
import { BerandaService } from './_service/beranda/beranda.service';
=======
import { AnggotaService } from './anggota.service';
import { BerandaService } from './beranda.service';
>>>>>>> origin/master

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    AnggotaService, 
    BerandaService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
