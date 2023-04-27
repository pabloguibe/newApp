import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersPage } from './customers.page';

const routes: Routes = [
  {
    path: '',
    component: CustomersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
