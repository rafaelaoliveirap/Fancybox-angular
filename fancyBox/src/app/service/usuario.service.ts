import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

usuario: Usuario;

  constructor(private http: HttpClient) {}


  postCadastrarUsuarios(usuario: Usuario){
    return this.http.post('http://localhost:8080/usuarios',usuario)
  }

  putUsuario(usuario: Usuario){
    return this.http.put('http://localhost:8080/usuarios',usuario)
  }

  getByIdUsuario(id:number){
    return this.http.get(`http://localhost:8080/usuarios/${id}`)
  }

  // deleteUsuario(id:number){
  //   return this.http.delete(`http://93.188.161.223:9000/user/${id}`)
  // }





}
