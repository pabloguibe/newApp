import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http'
import { RouteReuseStrategy, RouterModule} from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    IonicModule.forRoot(),
    RouterModule.forRoot([]),
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    
    
    
  ],
  providers: [
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
