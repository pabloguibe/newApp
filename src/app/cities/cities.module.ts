import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities-routing.module';
import { RouterModule} from '@angular/router';
import { CitiesPage } from './cities.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CitiesPage
  ],
  imports: [
    SharedModule,
    CitiesRoutingModule,
  ]
})
export class CitiesModule { }
