import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AnggotaService } from './_service/anggota.service';
import { BerandaService } from './_service/beranda.service';
import { ProgramService } from './_service/program.service';
import { NavbarService } from './_service/navbar.service';
import { ProgramDetailComponent } from './program-detail/program-detail.component';
import { KegiatanComponent } from './kegiatan/kegiatan.component';
import { MitraComponent } from './mitra/mitra.component';
import { MitraDetailComponent } from './mitra-detail/mitra-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProgramDetailComponent,
    KegiatanComponent,
    MitraComponent,
    MitraDetailComponent
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
