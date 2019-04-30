import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './_component/body/body.component';
import { NavigationComponent } from './_component/navigation/navigation.component';
import { FooterComponent } from './_component/footer/footer.component';
import { ProgramComponent } from './_component/program/program.component';
import { TentangKamiComponent } from './_component/tentang-kami/tentang-kami.component';
import { AnggotaComponent } from './_component/anggota/anggota.component';
import { HeadComponent } from './_component/head/head.component';
import { PageNotFoundComponent } from './_component/page-not-found/page-not-found.component';

const routes: Routes = [
  { path : '', redirectTo : '/beranda', pathMatch : 'full' },
  { path : 'beranda' , component : BodyComponent},
  { path : 'program', component : ProgramComponent },
  { path : 'anggota', component : AnggotaComponent },
  { path : 'tentang', component : TentangKamiComponent },
  { path : "**", component : PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash:true })
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
