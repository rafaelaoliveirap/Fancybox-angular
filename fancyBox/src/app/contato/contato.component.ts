import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../service/contato.service';
import { Contato } from '../model/Contato';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formularioDeContato: FormGroup;
  contato: Contato = new Contato();



  constructor(private contatoService: ContatoService, private fb: FormBuilder) { }

  

  ngOnInit() {
    window.scroll(0, 0);
    this.criarFormularioDeContato();
  }


  enviarContato(){
    this.contatoService.postEnviarContato(this.contato).subscribe((resp: Contato)=>{
      this.contato = resp;
      alert("Mensagem enviada com sucesso! Em breve entraremos em contato.")
      location.assign('/contato');
    })
  
}

enviarDados() {
  const dadosFormulario = this.formularioDeContato.value;

  const contato = new Contato();

  

  // this.formularioDeContato.reset();
  
}

criarFormularioDeContato(){
  this.formularioDeContato = this.fb.group({
  nome: ['', Validators.compose([Validators.minLength(2), Validators.maxLength(50), Validators.required])],
  email: ['', Validators.compose([Validators.email, Validators.minLength(9), Validators.maxLength(100), Validators.required])],
  assunto: ['', Validators.compose([Validators.required])],
  mensagem: ['', Validators.compose([Validators.required])] 
  })
}

get nome() {
  return this.formularioDeContato.get('nome');
}
get email() {
  return this.formularioDeContato.get('email');
}

get assunto() {
  return this.formularioDeContato.get('assunto');
}

get mensagem() {
  return this.formularioDeContato.get('mensagem');
}



}
