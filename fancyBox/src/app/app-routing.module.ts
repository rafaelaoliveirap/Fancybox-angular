import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { FaqComponent } from './faq/faq.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { TermosDeUsoComponent } from './termos-de-uso/termos-de-uso.component';
import { CadastrarUsuariosComponent } from './cadastrar-usuarios/cadastrar-usuarios.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'sobre-nos', component: SobreNosComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'parceiros', component: ParceirosComponent},
  {path: 'politicas', component: PoliticasComponent},
  {path: 'termos-de-uso', component: TermosDeUsoComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'cadastrar-usuarios', component: CadastrarUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
