import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../service/contato.service';
import { Contato } from '../model/Contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contato: Contato = new Contato();

  constructor(private contatoService: ContatoService) { }



  ngOnInit() {
    window.scroll(0, 0)

  }


  enviarContato(){
    this.contatoService.postEnviarContato(this.contato).subscribe((resp: Contato)=>{
      this.contato = resp;
      // alert("Mensagem enviada com sucesso! Em breve entraremos em contato.")
      location.assign('/contato');
    })
  
}
}
