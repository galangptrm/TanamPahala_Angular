import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { BodyComponent } from './_component/body/body.component';
import { NavigationComponent } from './_component/navigation/navigation.component';
import { FooterComponent } from './_component/footer/footer.component';
import { ProgramComponent } from './_component/program/program.component';
import { TentangKamiComponent } from './_component/tentang-kami/tentang-kami.component';
import { AnggotaComponent } from './_component/anggota/anggota.component';
import { HeadComponent } from './_component/head/head.component';
import { PageNotFoundComponent } from './_component/page-not-found/page-not-found.component';
=======
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
  { path : 'program/:slug', component : ProgramDetailComponent },
  { path : 'anggota', component : AnggotaComponent },
  { path : 'tentang', component : TentangKamiComponent },
  { path : "**", component : PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
<<<<<<< HEAD
    RouterModule.forRoot(routes, { useHash:true })
=======
    RouterModule.forRoot(routes)
>>>>>>> origin/master
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
