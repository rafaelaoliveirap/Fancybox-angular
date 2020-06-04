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
  janelaAberta5: boolean = false;
  janelaAberta6: boolean = false;
  janelaAberta7: boolean = false;
  

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
abrirJanela5(){
    
  if(this.janelaAberta5 == false){
  this.janelaAberta5=true}
  else{
  this.janelaAberta5 = false}
}
abrirJanela6(){
    
  if(this.janelaAberta6 == false){
  this.janelaAberta6=true}
  else{
  this.janelaAberta6 = false}
}
abrirJanela7(){
    
  if(this.janelaAberta7 == false){
  this.janelaAberta7=true}
  else{
  this.janelaAberta7 = false}
}



}
