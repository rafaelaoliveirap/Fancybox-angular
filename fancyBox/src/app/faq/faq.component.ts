import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  janelaAberta1: boolean = false;
  janelaAberta2: boolean = false;
  janelaAberta3: boolean = false;
  janelaAberta4: boolean = false;
  

  constructor() { }

  ngOnInit(): void {
  }

  abrirJanela1(){
    
      if(this.janelaAberta1 == false){
      this.janelaAberta1=true}
      else{
      this.janelaAberta1 = false}
      
    
  }

  abrirJanela2(){
    
    if(this.janelaAberta2 == false){
    this.janelaAberta2=true}
    else{
    this.janelaAberta2 = false}
    
  
}
abrirJanela3(){
    
  if(this.janelaAberta3 == false){
  this.janelaAberta3=true}
  else{
  this.janelaAberta3 = false}
  

}
abrirJanela4(){
    
  if(this.janelaAberta4 == false){
  this.janelaAberta4=true}
  else{
  this.janelaAberta4 = false}
  

}
   
  

}
