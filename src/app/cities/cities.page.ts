import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, ToastController } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http'
import { CitiesRoutingModule } from './cities-routing.module';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})

export class CitiesPage implements OnInit {
  cities: any = [];

  token=localStorage.getItem("token");

  constructor(private router: Router, private http: HttpClient, public toastController: ToastController, public alertController: AlertController) { }

  ngOnInit() {
    console.log("token: ", this.token);
    //localStorage.removeItem('token');
    localStorage.clear();
    console.log("hola");
    this.getCities().subscribe(res => {
      console.log("Res", res)
      this.cities = res;
    })
  }

  getCities() {
    return this.http.get("assets/files/cities.json").pipe(map((res: any) => {
      return res.data;
    }))
  }

  async presentToast1() {
    const toast = await this.toastController.create({
      message: 'Ciudad seleccionada',
      duration: 2000,
      position: "bottom"
    });
    toast.present()
  }

  async presentAlert1() {
    const alert = await this.alertController.create({
      header: "Borrar ciudad",
      message: "Se ha borrado la ciudad correctamente",
      buttons: ["OK"]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: "Borrar ciudad",
      message: "¿Estas seguro?",
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log("No cancel")
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log("Ciudad eliminada")
        }
      }]
    });
    await alert.present()
let result = await alert.onDidDismiss();
console.log(result);
  }
}
