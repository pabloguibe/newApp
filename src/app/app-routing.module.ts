import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:'',
  redirectTo:'home',
  pathMatch:'full'
},

{
  path: 'home',
  loadChildren: () => import ('./home/home.module').then(m => m.HomeModule)
},

{
  path: 'customers',
  loadChildren: () => import ('./customers/customers.module').then(m => m.CustomersModule)
},

{
  path: 'city',
  loadChildren: () => import ('./city/city.module').then(m => m.CityModule)
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
