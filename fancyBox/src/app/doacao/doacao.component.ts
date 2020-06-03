import { Component, OnInit } from '@angular/core';
import { faBarcode } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {

  mostrarLogin: boolean=false;

  faBarcode = faBarcode
  faCreditCard = faCreditCard

  constructor() { }

  ngOnInit(): void {
  }
  exibirLogin(){
    this.mostrarLogin=true;
    

  }
}
