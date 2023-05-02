import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import ('./home/home.module').then(m => m.HomeModule)
  },

  {
    path: 'customers',
    loadChildren: () => import ('./customers/customers.module').then(m => m.CustomersModule)
  },

  {
    path: 'cities',
    loadChildren: () => import ('./cities/cities.module').then(m => m.CitiesModule)
  },

  {
    path: 'city',
    loadChildren: () => import ('./city/city.module').then(m => m.CityModule)
  },

  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
