import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import{map} from 'rxjs/operators';
import{HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss']
})
export class CustomersPage implements OnInit{

  users: any =[];
  searchedUser: any;

  permission: boolean = false;

  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit() {
    this.permission= true;

    console.log("hola");
    this.getusers().subscribe(res=>{
      console.log("Res",res)
      this.users= res;
      this.searchedUser= this.users;
    })
  }

  goToHome(){
    this.router.navigate(['/home'])
  }

  getusers(){
    return this.http.get("assets/files/customers.json").pipe(map((res:any) =>{
      return res.data;
    }))
  }

  searchCustomer(event:any){
    const text = event.target.value;
    if(text && text.trim() != ''){
      this.searchedUser = this.searchedUser.filter((user:any) => {
        return (user.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })
    }

  }
}
