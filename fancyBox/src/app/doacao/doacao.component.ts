import { OngService } from './../service/ong.service';
import { Ong } from './../model/ong';
import { Component, OnInit } from '@angular/core';
import { faBarcode } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {
  listaOng: Ong []

  Ong: Ong = new Ong;

  mostrarLogin: boolean=false;
  
  faBarcode = faBarcode
  faCreditCard = faCreditCard

  constructor(private ongService: OngService) { }

  ngOnInit() {
    this.findAllOngs;
  }
  exibirLogin(){
    this.mostrarLogin=true;
  }
  findAllOngs(){
    this.ongService.getAllOngs().subscribe((resp: Ong[])=>{
      this.listaOng = resp
    })
  }
  
  
}
