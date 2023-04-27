import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CityPage } from './city.page';


@NgModule({
  declarations: [
    CityPage
  ],
  imports: [
    SharedModule,
    CityRoutingModule
  ]
})
export class CityModule { }
