import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: '/home', icon: 'home' },
    { title: 'customers', url: '/customers', icon: 'people' },
    { title: 'cities', url: '/cities', icon: 'location' },
    { title: 'login', url: '/login', icon: 'log-in' },
  ];
  constructor() { }

  shareApp() {
    Share.share({
      title: 'Has visto la nueva app X',
      text: 'Descarga gratis la nueva app de X y pruebala',
      url: 'http://ionicframework.com/',
     
    });

  }
}
