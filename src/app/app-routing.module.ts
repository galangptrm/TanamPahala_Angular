import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ProgramComponent } from './program/program.component';
import { TentangKamiComponent } from './tentang-kami/tentang-kami.component';
import { AnggotaComponent } from './anggota/anggota.component';
import { HeadComponent } from './head/head.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProgramDetailComponent } from './program-detail/program-detail.component';
import { KegiatanComponent } from './kegiatan/kegiatan.component';
import { MitraComponent } from './mitra/mitra.component';
import { MitraDetailComponent } from './mitra-detail/mitra-detail.component';

const routes: Routes = [
  { path : '', redirectTo : '/beranda', pathMatch : 'full' },
  { path : 'beranda' , component : BodyComponent},
  { path : 'program', component : ProgramComponent },
  { path : 'anggota', component : AnggotaComponent },
  { path : 'kegiatan', component : KegiatanComponent },
  { path : 'kegiatan/:slug', component : ProgramDetailComponent },
  { path : 'mitra', component : MitraComponent },
  { path : 'mitra/:slug', component : MitraDetailComponent },
  { path : "**", component : PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }

export const routingComponents = [
  HeadComponent,
  BodyComponent, 
  ProgramComponent,
  KegiatanComponent,
  TentangKamiComponent,
  AnggotaComponent,
  MitraComponent,
  NavigationComponent, 
  FooterComponent,
  PageNotFoundComponent
]
