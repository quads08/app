import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListReponseComponent } from './list-reponse/list-reponse.component';
import { AjoutReponseComponent } from './ajout-reponse/ajout-reponse.component';

const routes: Routes = [
  {path:'add', component: AjoutReponseComponent},
  {path:'all', component: ListReponseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReponseRoutingModule { }
