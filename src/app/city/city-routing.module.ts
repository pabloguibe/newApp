import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityPage } from './city.page';

const routes: Routes = [
  {
    path: ':id',
    component: CityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
