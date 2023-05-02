import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  token = "1234";


  constructor() { }

  ngOnInit() {
  }

  login() {
    localStorage.setItem('token',this.token)
  }

}
