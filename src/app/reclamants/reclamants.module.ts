import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamantsRoutingModule } from './reclamants-routing.module';
import { EtudiantsComponent } from './etudiants/etudiants.component';

import { ParentsComponent } from './parents/parents.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';


@NgModule({
  declarations: [EtudiantsComponent, ParentsComponent, EntreprisesComponent],
  imports: [
    CommonModule,
    ReclamantsRoutingModule
  ]
})
export class ReclamantsModule { }
