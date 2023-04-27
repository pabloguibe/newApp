import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http'
import { RouterModule} from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ]
})
export class AppModule { }
