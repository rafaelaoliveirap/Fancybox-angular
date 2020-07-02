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
 

  ong: Ong = new Ong;
   
  listaOng: Ong[]

  mostrarLogin: boolean=false;
  
  faBarcode = faBarcode
  faCreditCard = faCreditCard

  alerta: boolean = false;

  constructor(private ongService: OngService) { }

  ngOnInit() {
    this.findAllOngs();
    this.enviarAlerta();
  }

  findAllOngs(){
    this.ongService.getAllOngs().subscribe((resp: Ong[])=>{
      this.listaOng = resp

  })
  }

  enviarAlerta(){
    this.mensagem();
  
  }

  mensagem(){

      this.alerta=true
  }

  resetar() {
  location.assign('/doacao')
 
  }
}
