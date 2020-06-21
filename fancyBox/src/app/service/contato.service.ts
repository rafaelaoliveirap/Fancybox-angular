import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from '../model/contato';


@Injectable({
    providedIn: 'root'
  })

  
export class ContatoService {


  contato: Contato;

  constructor(private http: HttpClient) {}


postEnviarContato(contato: Contato){
    return this.http.post('http://127.0.0.1:8080/contato',contato)
  }

  


}
      