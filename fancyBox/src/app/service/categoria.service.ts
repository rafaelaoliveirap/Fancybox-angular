import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../model/categoria';


@Injectable({
    providedIn: 'root'
  })

  
export class CategoriaService {


  categoria: Categoria;

  constructor(private http: HttpClient) {}


getAllCategorias(){
    return this.http.get('http://127.0.0.1:8080/categoria')
  }

  


}