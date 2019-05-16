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

const routes: Routes = [
  { path : '', redirectTo : '/beranda', pathMatch : 'full' },
  { path : 'beranda' , component : BodyComponent},
  { path : 'program', component : ProgramComponent },
  { path : 'artikel', component : ProgramDetailComponent },
  { path : 'anggota', component : AnggotaComponent },
  { path : 'tentang', component : TentangKamiComponent },
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
  TentangKamiComponent,
  AnggotaComponent,
  NavigationComponent, 
  FooterComponent,
  PageNotFoundComponent
]
