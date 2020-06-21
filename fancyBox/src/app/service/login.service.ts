import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login';



@Injectable({
    providedIn: 'root'
  })

  
export class LoginService{

    login: Login;

    constructor(private http: HttpClient) {}

    
postLogar( login: Login){
    return this.http.post('http://127.0.0.1:8080/usuarios/logar', login)
}

}