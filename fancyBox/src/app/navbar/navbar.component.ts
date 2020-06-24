import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Login } from '../model/login';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  faShoppingCart = faShoppingCart
 

  mostrarLogin: boolean=false;

  

  nome: string = localStorage.getItem('nome')

  constructor(private router: Router,public auth: AuthService) { }

  ngOnInit(): void {
  }


  exibirLogin(){
    this.mostrarLogin=true;
    
  }

  sair(){
    this.router.navigate(['home'])
    localStorage.clear()
  }
}

