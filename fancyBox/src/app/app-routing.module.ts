import { UsuarioComponent } from './usuario/usuario.component';
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
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { LoginComponent } from './login/login.component';
import { DoacaoComponent } from './doacao/doacao.component';
import { ProdutosComponent } from './produtos/produtos.component';



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
  {path: 'usuario', component: UsuarioComponent},
  {path: 'cadastrar-usuarios', component: CadastrarUsuariosComponent},
  {path: 'editar-usuario/:id', component: EditarUsuarioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'doacao', component: DoacaoComponent},
  {path: 'produtos', component: ProdutosComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
