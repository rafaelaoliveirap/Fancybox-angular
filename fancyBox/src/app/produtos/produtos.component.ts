import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';
import { ThrowStmt } from '@angular/compiler';
import { Router, ActivatedRoute } from '@angular/router';
import { CarrinhoService } from '../service/carrinho.service';
import { Carrinho } from '../model/carrinho';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {


  listaProdutos: Produto[]

  listaProdutosResetada: Produto[]

  produto: Produto = new Produto;
  nomeCategoria: string = localStorage.getItem('nomeCategoria')
  public listaCategorias : Array<Categoria> = [];
 

  constructor
  (
    private produtoService: ProdutoService, 
    private router: Router, 
    private _activeRoute: ActivatedRoute,
    private categoriasService: CategoriaService,
    private carrinhoService: CarrinhoService
  ) 
  { 
    this.categoriasService.getAllCategorias().subscribe(resp=> this.listaCategorias = resp);
  }

  ngOnInit() : void
  {
    // toda mudança de url cai nesse método
    this._activeRoute.queryParams.subscribe(params=>
    {
      console.log('Mudou a rota');
      let parametroCategoria = null;
      if(params.idCategoria)
      {
        parametroCategoria = parseInt(params.idCategoria);
      }
      //se não tiver o id na url ele busca por categoria
      if(parametroCategoria)
      {
        this.buscaProdutosPeloCategoriaId(parametroCategoria);
      }
      //se não tiver 
      else
      {
        this.findAllProdutos();
      }
      
    });
  }

  findAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp;
      
    })
  }
  buscaProdutosPeloCategoriaId(_id:number) : void
  {
    this.produtoService.GetByIdCategoria(_id).subscribe((resp: Produto[])=>{
      this.listaProdutos = resp;
    })
  } 
  setarCategoriaNaUrl(_id:string) :  void
  {
    this.router.navigate(['/produtos'], { queryParams: { idCategoria: _id}, queryParamsHandling: 'merge'});
  }
  findAllCategoria(){
    this.produtoService.GetByName(this.nomeCategoria).subscribe((resp: Produto[])=>{
       this.listaProdutos = resp;
     })
  }

  listarTodos()
  {
    this.router.navigate(['/produtos']);
  }
  
  //Adicionar item no carrinho
  adicionarAoCarrinho(produto: Produto) {
    const carrinho = new Carrinho(produto)
    this.carrinhoService.adicionarItemCarrinho(carrinho)
  }
  
}

