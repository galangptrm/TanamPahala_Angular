import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ProgramComponent } from './program/program.component';
import { TentangKamiComponent } from './tentang-kami/tentang-kami.component';
import { AnggotaComponent } from './anggota/anggota.component';
import { HeadComponent } from './head/head.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
var routes = [
    { path: '', redirectTo: '/beranda', pathMatch: 'full' },
    { path: 'beranda', component: BodyComponent },
    { path: 'program', component: ProgramComponent },
    { path: 'anggota', component: AnggotaComponent },
    { path: 'tentang', component: TentangKamiComponent },
    { path: "**", component: PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [
                CommonModule,
                RouterModule.forRoot(routes)
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
export var routingComponents = [
    HeadComponent,
    BodyComponent,
    ProgramComponent,
    TentangKamiComponent,
    AnggotaComponent,
    NavigationComponent,
    FooterComponent,
    PageNotFoundComponent
];
//# sourceMappingURL=app-routing.module.js.map