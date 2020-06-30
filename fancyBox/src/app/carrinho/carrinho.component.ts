import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../service/carrinho.service';
import { Carrinho } from '../model/carrinho';
import { Scroll } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  carrinho: Carrinho[] = []

  totalDoCarrinho: number = 0

  precoTotal: number = 0

  qtdTotal: number = 0

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.totalCarrinho();
    window.scroll(0,0)

  }

  totalCarrinho() {
    this.carrinho = this.carrinhoService.carrinho
    this.carrinhoService.precoTotal.subscribe(data => this.totalDoCarrinho = data)

    this.carrinhoService.quantidadeTotal.subscribe(data => this.qtdTotal = data)

    this.carrinhoService.calcularTotal()
  }

  adicionarQuantidade(carrinho: Carrinho) {
    this.carrinhoService.adicionarItemCarrinho(carrinho)
  }

  diminuirQuantidade(carrinho: Carrinho) {
    this.carrinhoService.diminuirDoCarrinho(carrinho)
  }

  remover(carrinho: Carrinho) {
    this.carrinhoService.remover(carrinho)
  }
}
