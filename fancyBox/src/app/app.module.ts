import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { FaqComponent } from './faq/faq.component';
import { ParceirosComponent } from './parceiros/parceiros.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreNosComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContatoComponent,
    FaqComponent,
    ParceirosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
