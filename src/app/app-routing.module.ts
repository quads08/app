import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReclamationModule } from './reclamation/reclamation.module';
import { AppelModule } from './appel/appel.module';
import { ReponseModule } from './reponse/reponse.module';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReclamantsModule } from './reclamants/reclamants.module';
//import { PersonnelModule } from '../personnel/personnel.module';



const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full' },
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'home', component: HomeComponent, canActivate:[AuthGuard],
    children: [
      { path: '', component: DashboardComponent}, 
      { path: 'reclamation', loadChildren: './reclamation/reclamation.module#ReclamationModule'} ,
      { path: 'reponse', loadChildren: './reponse/reponse.module#ReponseModule'} ,
      { path: 'appel', loadChildren: './appel/appel.module#AppelModule'} ,
      { path: 'reclamant', loadChildren: './reclamants/reclamants.module#ReclamantsModule'} ,
      { path: 'personnel', loadChildren: './personnel/personnel.module#PersonnelModule'} 
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
