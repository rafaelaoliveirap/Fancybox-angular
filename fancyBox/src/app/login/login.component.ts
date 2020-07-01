
import { Login } from './../model/login';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login;




  constructor(private authService: AuthService, private router:Router) {} 

  ngOnInit(){
   
  }

 
logar(){
  this.authService.logar(this.login).subscribe((resp: Login) => {
    this.login = resp;
    localStorage.setItem('token', this.login.token);
    localStorage.setItem('nome', this.login.nome);
    location.assign('/produtos')
  }, err => {
    alert('Houve um erro ao entrar, verifique o e-mail e a senha');
  });
}
}

