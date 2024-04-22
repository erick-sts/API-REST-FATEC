import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CentralComponent } from './components/central/central.component';
import { FormProfessorComponent } from './components/form-professor/form-professor.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { EdicaoProfessorComponent } from './components/edicao-professor/edicao-professor.component';
import { AlertaComponent } from './components/alerta/alerta.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'cadastrousuario', component: CadastroUsuarioComponent},
    {path:'login', component:LoginComponent},
    {path: 'central', component:CentralComponent},
    {path: 'central/FormProfessor', component: FormProfessorComponent},
    {path: 'edicaoProfessor/:nome', component: EdicaoProfessorComponent},
    {path: 'alerta', component:AlertaComponent}


];
