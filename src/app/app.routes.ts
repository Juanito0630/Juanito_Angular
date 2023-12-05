import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { PerfilComponent } from './perfil/perfil.component';
import { OpcionesEmpleComponent } from './opciones-emple/opciones-emple.component';

export const routes: Routes = [
    {path: '', component:LoginComponent, pathMatch: "full"},
    {path: 'registrar', component:RegisterComponent, pathMatch: "full"},
    {path: 'dashboard', component:DashboardComponent, pathMatch: "full"},
    {path: 'perfil', component:PerfilComponent, pathMatch: "full"},
    {path: 'opciones-emple', component:OpcionesEmpleComponent, pathMatch: "full"}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
