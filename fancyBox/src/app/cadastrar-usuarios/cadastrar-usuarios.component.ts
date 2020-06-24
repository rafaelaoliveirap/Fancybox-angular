import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/usuario';


@Component({
  selector: 'app-cadastrar-usuarios',
  templateUrl: './cadastrar-usuarios.component.html',
  styleUrls: ['./cadastrar-usuarios.component.css']
})
export class CadastrarUsuariosComponent implements OnInit {


  usuario: Usuario = new Usuario;

  data = {
    senha: '',
    confirmaSenha: '',
  };

  constructor(private usuarioService: UsuarioService) { }



  ngOnInit() {
    window.scroll(0, 0)
  }

  validarSenha(){
    if(this.data.senha === this.data.confirmaSenha){
       this.cadastrar();
      alert("Cadastro efetuado!")
     
    }else {
      alert("Senha incompátivel")
      document.getElementById("confirmaSenha").style.borderColor="red";
        
    }
  }

  cadastrar(){
    this.usuarioService.postCadastrarUsuarios(this.usuario).subscribe((resp: Usuario)=>{
      this.usuario = resp;
      location.assign('/home');
    })
  }

 



}
