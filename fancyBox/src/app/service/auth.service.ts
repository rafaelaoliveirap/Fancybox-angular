import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  logar(login:Login){
    return this.http.post('http://localhost:8080/usuarios/logar',login)
  }

  btnSair(){
    let ok = false;
    let token = localStorage.getItem('token');

    if(token!= null){
      ok=true;

    }
    return ok;
  }

  btnLogin(){
    let ok = false;
    let token = localStorage.getItem('token');

    if(token== null){
      ok=true

    }
    return ok;
  }
  cadastrar(usuario:Usuario) {
    return this.http.post('http://localhost:8080/usuarios/cadastrar', usuario);
  }

  
}
