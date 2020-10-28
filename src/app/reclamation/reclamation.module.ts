import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { AjoutReclamationComponent } from './ajout-reclamation/ajout-reclamation.component';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';
import { MesReclamationsComponent } from './mes-reclamations/mes-reclamations.component';
import { TruncatePipe } from 'src/app/TruncatePipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AjoutReclamationComponent, ListReclamationComponent, MesReclamationsComponent, TruncatePipe],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    FormsModule,  
    NgbModule,
    ReactiveFormsModule ,
  ]
})
export class ReclamationModule { }
