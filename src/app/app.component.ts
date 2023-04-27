import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';

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
  ];
  constructor() {}
}
