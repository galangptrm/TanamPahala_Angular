import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AnggotaService } from './_service/anggota.service';
import { BerandaService } from './_service/beranda.service';
import { ProgramService } from './_service/program.service';
import { NavbarService } from './_service/navbar.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    AnggotaService, 
    BerandaService,
    ProgramService,
    NavbarService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
