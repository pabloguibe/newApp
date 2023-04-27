import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityPage } from "../city/city.page";

const routes: Routes = [
  {
    path: 'city/:id',
    component: CityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitiesRoutingModule { }
