import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../model/categoria';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

  
export class CategoriaService {


  categoria: Categoria;

  constructor(private http: HttpClient) {}


   getAllCategorias() : Observable<Array<Categoria>>
  {
    return this.http.get<Array<Categoria>>('http://127.0.0.1:8080/categoria')
  }

  


}