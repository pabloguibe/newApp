import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CustomersPage } from './customers.page';


@NgModule({
  declarations: [
    CustomersPage
  ],
  imports: [
    SharedModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
