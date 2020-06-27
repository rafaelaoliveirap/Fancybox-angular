import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/produto';
import { Categoria } from '../model/categoria';



@Injectable({
    providedIn: 'root'
  })

  
export class ProdutoService {


  produto: Produto;

  categoria: Categoria;

  constructor(private http: HttpClient) {}


  getAllProdutos(){
    return this.http.get('http://127.0.0.1:8080/produto')
  }

  GetByName(nomeCategoria:string){
    return this.http.get(`http://localhost:8080/produto/nomeCategoria/${nomeCategoria}`)
  }
  GetByIdCategoria(idCategoria:number){
    return this.http.get(`http://localhost:8080/produto/categoria/${idCategoria}`)
  }

}

