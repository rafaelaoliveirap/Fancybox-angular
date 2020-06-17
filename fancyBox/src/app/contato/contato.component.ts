import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/Contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contato: Contato = new Contato();

  constructor() { }

  email: string;
  erroEmail: boolean = false;

  ngOnInit() {
    window.scroll(0, 0)

  }
  
}
