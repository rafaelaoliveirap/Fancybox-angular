import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  items = [];
  
  pageOfItems: Array<any>;

  listaProdutos: Produto[]
  

  produto: Produto = new Produto

  listaCategoria: Categoria[]
  categoria: Categoria = new Categoria

  constructor(private produtoService: ProdutoService, private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.findAllProdutos();
    this.findAllCategoria();
  }

  findAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.items = resp;
    })
  }

  findAllCategoria(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[])=>{
      this.listaCategoria = resp;
    })
    
  }

  onChangePage(pageOfItems: Array<any>){
    this.listaProdutos = pageOfItems;
  }

}
