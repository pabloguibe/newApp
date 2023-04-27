import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {


  id: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    console.log("id", this.id);
  }

}
