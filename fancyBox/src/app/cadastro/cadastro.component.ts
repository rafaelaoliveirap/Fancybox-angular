import { Usuario } from './../model/usuario';
import { UsuarioService } from './../service/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario
  listaUsuarios: Usuario []

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(){
    this.todosUsuarios()
  }

  todosUsuarios(){
    this.usuarioService.getAllUsuarios().subscribe((resp: Usuario[])=>{
    this.listaUsuarios=resp
    })
  }

}
