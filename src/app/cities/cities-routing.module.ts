import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityPage } from "../city/city.page";
import { CitiesPage } from './cities.page';

const routes: Routes = [
  {
    path: '',
    component: CitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitiesRoutingModule { }
