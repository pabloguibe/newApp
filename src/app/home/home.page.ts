import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  code: any;

  constructor(private router: Router, private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  goToCustomers() {
    this.router.navigate(['/customers'])
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barcode data', this.code);
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
