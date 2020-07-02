import { OngService } from './../service/ong.service';
import { Ong } from './../model/ong';
import { Component, OnInit } from '@angular/core';
import { faBarcode } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {
 
  formularioDeDoacao: FormGroup;
  ong: Ong = new Ong;
   
  listaOng: Ong[]

  mostrarLogin: boolean=false;
  
  faBarcode = faBarcode
  faCreditCard = faCreditCard

  alerta: boolean = false;

  constructor(private ongService: OngService, private fb: FormBuilder) { }

  ngOnInit() {
    this.findAllOngs();
    this.ValidaFormularioDeDoacao();
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


  ValidaFormularioDeDoacao(){
    this.formularioDeDoacao = this.fb.group({
    email: ['', Validators.compose([Validators.email, Validators.minLength(9), Validators.maxLength(100), Validators.required])]
    })
  }
  get email() {
    return this.formularioDeDoacao.get('email');
  }

  

  resetar() {
  location.assign('/doacao')
 
  }
}
