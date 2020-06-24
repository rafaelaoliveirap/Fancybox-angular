import { Component, OnInit } from '@angular/core';

import { Usuario } from '../model/usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar-usuarios',
  templateUrl: './cadastrar-usuarios.component.html',
  styleUrls: ['./cadastrar-usuarios.component.css']
})
export class CadastrarUsuariosComponent implements OnInit {

  usuario: Usuario = new Usuario;

  senha: string;

  constructor(private authService:AuthService) { }



  ngOnInit() {
    window.scroll(0, 0)
  }
  
  conferirSenha(event:any){
    this.senha=event.target.value

  }

  cadastrar(){
    if(this.senha===this.usuario.senha){

      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario)=>{
        this.usuario = resp;
        location.assign('/home');
      })
     
    }
    else{
      alert("Senhas não correspondem");
    }
   
  }

 



}
