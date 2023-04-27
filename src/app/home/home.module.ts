import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
