import { Produto } from './produto';

export class Carrinho {

    public idProduto: number;
    public nomeProduto: string;
    public descricao: string;
    public preco: number;
    public quantidade: number;
    public imagem: string;


constructor(produto: Produto){
    this.idProduto = produto.idProduto
    this.nomeProduto = produto.nomeProduto
    this.descricao = produto.descricao
    this.preco = produto.preco
    this.quantidade = produto.quantidade
    this.imagem = produto.imagem
}
}


