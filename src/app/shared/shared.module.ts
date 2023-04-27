
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule} from '@angular/router';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [],
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class SharedModule { }


