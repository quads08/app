import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAppelComponent } from './list-appel/list-appel.component';
import { AjoutAppelComponent } from './ajout-appel/ajout-appel.component';

const routes: Routes = [
  { path: 'add', component: AjoutAppelComponent },
  { path: 'all', component: ListAppelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppelRoutingModule {}
