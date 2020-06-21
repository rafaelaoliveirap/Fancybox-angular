import { LoginService } from './../service/login.service';
import { Login } from './../model/login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login;


  constructor(private loginService: LoginService) { }


  ngOnInit(){
    this.logar;  
  }

  logar(){
    this.loginService.postLogar(this.login).subscribe((resp: Login)=>{
      this.login = resp;
      location.assign('/home');
  })

}
}
