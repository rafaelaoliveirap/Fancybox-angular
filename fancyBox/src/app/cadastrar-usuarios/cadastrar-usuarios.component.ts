import { Component, OnInit } from '@angular/core';

import { Usuario } from '../model/usuario';
import { AuthService } from '../service/auth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-cadastrar-usuarios',
  templateUrl: './cadastrar-usuarios.component.html',
  styleUrls: ['./cadastrar-usuarios.component.css']
})
export class CadastrarUsuariosComponent implements OnInit {

  formularioDeUsuario: FormGroup;

  usuario: Usuario = new Usuario;
  senha: string;

  constructor(private authService:AuthService, private fb: FormBuilder) {
    
   }

  

  ngOnInit() {
    window.scroll(0, 0);

    this.criarFormularioDeUsuario();

  }

  enviarDados() {
    const dadosFormulario = this.formularioDeUsuario.value;

    const usuario = new Usuario();

    

    // this.formularioDeUsuario.reset();
    
  }

  criarFormularioDeUsuario(){
    this.formularioDeUsuario = this.fb.group({
    nome: ['', Validators.compose([Validators.minLength(2), Validators.maxLength(50), Validators.required])],
    sobrenome: ['', Validators.compose([Validators.minLength(2), Validators.maxLength(60), Validators.required])],
    cpf: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required])],
    logradouro: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(120), Validators.required])],
    bairro: ['', Validators.compose([Validators.minLength(2), Validators.maxLength(60), Validators.required])],
    cidade: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(60), Validators.required])],
    estado: ['', Validators.compose([Validators.minLength(2), Validators.maxLength(2), Validators.required])],
    complemento: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(60), Validators.required])],
    cep: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(8), Validators.required])],
    email: ['', Validators.compose([Validators.email, Validators.minLength(9), Validators.maxLength(100),Validators.required])],
    senha: ['', Validators.compose([Validators.required])],
    confirmaSenha: ['', Validators.compose([Validators.required])] 
    })
  }
  
  conferirSenha(event:any){
    this.senha=event.target.value

  }

  cadastrar(){
    if(this.senha===this.usuario.senha){

      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario)=>{
        this.usuario = resp;
        alert("Usuario cadastrado com sucesso")
        location.assign('/home');
      })
     
    }
    else{
      alert("Senhas não correspondem");
      
    }
   
  }

  get nome() {
    return this.formularioDeUsuario.get('nome');
  }

  get sobrenome() {
    return this.formularioDeUsuario.get('sobrenome');
  }

  get cpf() {
    return this.formularioDeUsuario.get('cpf');
  }

  get logradouro() {
    return this.formularioDeUsuario.get('logradouro');
  }

  get bairro() {
    return this.formularioDeUsuario.get('bairro');
  }

  get cidade() {
    return this.formularioDeUsuario.get('cidade');
  }

  get estado() {
    return this.formularioDeUsuario.get('estado');
  }

  get complemento() {
    return this.formularioDeUsuario.get('complemento');
  }

  get cep() {
    return this.formularioDeUsuario.get('cep');
  }

  get email() {
    return this.formularioDeUsuario.get('email');
  }

}
