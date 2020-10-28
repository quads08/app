import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppelRoutingModule } from './appel-routing.module';
import { AjoutAppelComponent } from './ajout-appel/ajout-appel.component';
import { ListAppelComponent } from './list-appel/list-appel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AjoutAppelComponent, ListAppelComponent],
  imports: [
    CommonModule,
    AppelRoutingModule,
    FormsModule, 
    ReactiveFormsModule ,
  ]
})
export class AppelModule { }
