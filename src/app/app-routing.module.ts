import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiceComponent } from './indice/indice.component';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo3v1Component } from './ejemplo3v1/ejemplo3v1.component';
import { Ejemplo3Component } from './ejemplo3/ejemplo3.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { Ejemplo4Component } from './ejemplo4/ejemplo4.component';
import { Ejemplo4v2Component } from './ejemplo4v2/ejemplo4v2.component';
import { Ejemplo4v4Component } from './ejemplo4v4/ejemplo4v4.component';
import { Ejemplo5Component } from './ejemplo5/ejemplo5.component';
import {InicioComponent} from "./inicio/inicio.component";
import {AddArticuloComponent} from "./ejemplo5/add-articulo/add-articulo.component";
import {VerArticuloComponent} from "./ejemplo5/ver-articulo/ver-articulo.component";
import {BorrarArticuloComponent} from "./ejemplo5/borrar-articulo/borrar-articulo.component";
import {FilterComponent} from "./filter/filter.component";
import {ArticlulosFilterComponent} from "./articlulos-filter/articlulos-filter.component";
import {ClientesComponent} from "./clientes/clientes.component";
import {Guard1Guard} from "./guards/guard1.guard";
import {LoginErrorComponent} from "./login-error/login-error.component";
import {LoggedInGuard} from "./guards/logged-in.guard";
import {ClienteDetailComponent} from "./cliente-detail/cliente-detail.component";
import {AddClienteComponent} from "./add-cliente/add-cliente.component";
import {PasswordGuard} from "./guards/password.guard";

const routes: Routes = [
  { path: '', component: InicioComponent },
  {path: 'indice', component: IndiceComponent},
  { path: 'ejemplo1', component: Ejemplo1Component },
  { path: 'ejemplo2', component: Ejemplo2Component },
  { path: 'ejemplo3', component: Ejemplo3Component },
  { path: 'ejemplo3v1', component: Ejemplo3v1Component },
  { path: 'ejemplo4', component: Ejemplo4Component },
  { path: 'ejemplo4v2', component: Ejemplo4v2Component },
  { path: 'ejemplo4v4', component: Ejemplo4v4Component },
  { path: 'ejemplo5', canActivate: [PasswordGuard], component: Ejemplo5Component },
  {path: 'add', component: AddArticuloComponent},
  {path: 'articulo/:id', component: VerArticuloComponent},
  {path: 'borrar/:id', component: BorrarArticuloComponent},
  {path: 'filter', component: FilterComponent},
  {path: 'articulosFiltrados', component: ArticlulosFilterComponent},
  {path: 'loginError', component: LoginErrorComponent},
  {path: 'clientes', canActivate: [PasswordGuard], component: ClientesComponent},
  {path: 'clientes/:id', component: ClienteDetailComponent},
  {path: 'nuevo', component: AddClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
