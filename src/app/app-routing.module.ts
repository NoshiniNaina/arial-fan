import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BannerComponent} from "./home/banner/banner.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: BannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
