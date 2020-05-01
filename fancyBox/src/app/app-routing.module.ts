import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { FaqComponent } from './faq/faq.component';
import { ParceirosComponent } from './parceiros/parceiros.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'sobre-nos', component: SobreNosComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'parceiros', component: ParceirosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
