import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReponseRoutingModule } from './reponse-routing.module';
import { AjoutReponseComponent } from './ajout-reponse/ajout-reponse.component';
import { ListReponseComponent } from './list-reponse/list-reponse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AjoutReponseComponent, ListReponseComponent],
  imports: [
    CommonModule,
    ReponseRoutingModule,
    FormsModule,  
    NgbModule,
    ReactiveFormsModule ,
  ]
})
export class ReponseModule { }
