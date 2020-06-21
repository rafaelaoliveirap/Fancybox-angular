import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ong } from '../model/ong';



@Injectable({
    providedIn: 'root'
  })

  
export class OngService{

    ong: Ong

    constructor(private http: HttpClient) {}

    
getAllOngs(){
    return this.http.get('http://127.0.0.1:8080/ong')
}

}