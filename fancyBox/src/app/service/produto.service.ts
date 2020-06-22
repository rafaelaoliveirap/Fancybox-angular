import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/produto';



@Injectable({
    providedIn: 'root'
  })

  
export class ProdutoService {


  produto: Produto;

  constructor(private http: HttpClient) {}


  getAllProdutos(){
    return this.http.get('http://127.0.0.1:8080/produto')
  }

}