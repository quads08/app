import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ApiReclamationService } from 'src/app/services/api-reclamation.service';
import { Reclamation } from 'src/app/models/Reclamation';

@Component({
  selector: 'app-ajout-reclamation',
  templateUrl: './ajout-reclamation.component.html',
  styleUrls: ['./ajout-reclamation.component.css']
})
export class AjoutReclamationComponent implements OnInit {
  addREC: FormGroup ;
  idU : number  ;
  constructor(private apiService:ApiReclamationService, private toastr: ToastrService, private router:Router, 
    private fb: FormBuilder) { 
      this.idU = parseInt(localStorage.getItem("userID"));
      console.log("ID USER SESSION : "+this.idU);

      
    let formControls = {
      sujet: new FormControl('', Validators.required ), 
      contenue: new FormControl('', Validators.required )  
    } 
    this.addREC = this.fb.group(formControls)
  }

  get sujet() { return this.addREC.get('sujet') }
  get contenue() { return this.addREC.get('contenue') } 

  ngOnInit(): void {
  }

  saveReclamantion(){
    let data = this.addREC.value;  
    let reclamantion = new Reclamation(null, null, data.sujet, data.contenue, this.idU);
    this.apiService.addReclamantion(reclamantion).subscribe(data=>{
      console.log("RES : "+data);
      if(data['RESPONSE']=="ERROR"){ 
        this.toastr.error('Erreur d\'ajout', 'Error',{timeOut: 2000});
      }else {   
        this.toastr.success('Réclamation envoyée avec succès', 'Succès',{timeOut: 2000});
        this.router.navigate(['/'])
      }
  }, error=>console.log("ERROR : "+error)); 
  }

}
