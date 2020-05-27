import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-deletar-usuario',
  templateUrl: './deletar-usuario.component.html',
  styleUrls: ['./deletar-usuario.component.css']
})
export class DeletarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario
  delOk: boolean = false

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    let id: number = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id:number){
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario)=>{
      this.usuario = resp    
    }, err => {
      console.log (`Erro: ${err.status}, Não conseguimos pegar o Id`)
    })
  }

  btnNao(){
    this.router.navigate(['/cadastro'])
  }
  
  btnSim(){
    this.usuarioService.deleteUsuario(this.usuario.id).subscribe(()=>{
      this.delOk = true
      this.router.navigate(['/cadastro'])
      localStorage.setItem("delOk", this.delOk.toString())
    })
  }

}
