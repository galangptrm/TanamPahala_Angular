import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ProgramComponent } from './program/program.component';
import { TentangKamiComponent } from './tentang-kami/tentang-kami.component';
import { AnggotaComponent } from './anggota/anggota.component';

const routes: Routes = [
  { path : 'index' , component : BodyComponent},
  { path : 'program', component : ProgramComponent },
  { path : 'anggota', component : AnggotaComponent },
  { path : 'tentang', component : TentangKamiComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class AppRoutingModule { }

export const routingComponents = [
  BodyComponent, 
  ProgramComponent,
  TentangKamiComponent,
  AnggotaComponent,
  NavigationComponent, 
  FooterComponent
]
