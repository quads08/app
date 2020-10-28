import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutReclamationComponent } from './ajout-reclamation/ajout-reclamation.component';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';
import { MesReclamationsComponent } from './mes-reclamations/mes-reclamations.component';

const routes: Routes = [
  {path:'add', component: AjoutReclamationComponent},
  {path:'all', component: ListReclamationComponent},
  {path:'my', component: MesReclamationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
