import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Reponse } from '../../models/reponse';
import { ApiReponseService } from '../../services/api-reponse.service';

@Component({
  selector: 'app-ajout-reponse',
  templateUrl: './ajout-reponse.component.html',
  styleUrls: ['./ajout-reponse.component.css']
})
export class AjoutReponseComponent implements OnInit {
  addREP: FormGroup ;
  idR : number  ;
  constructor(private apiService:ApiReponseService, private toastr: ToastrService, private router:Router, 
    private fb: FormBuilder, private activateRouter:ActivatedRoute) {  
    let formControls = { 
      contenue: new FormControl('', Validators.required )  
    } 
    this.addREP = this.fb.group(formControls)
  }
 
  get contenue() { return this.addREP.get('contenue') } 

  ngOnInit(): void {
    this.activateRouter.queryParams 
      .subscribe(params => {
        console.log(params); // { order: "popular" } 
        this.idR = params.id;
        console.log("ID RECUS ----> "+this.idR); // popular
      }
    );
  }

  saveReponse(){
    let data = this.addREP.value;  
    let rep = new Reponse(null, null, data.contenue,   this.idR);
    this.apiService.addReponse(rep).subscribe(data=>{
      console.log("RES : "+data);
      if(data['RESPONSE']=="ERROR"){ 
        this.toastr.error('Erreur d\'envoie', 'Error',{timeOut: 2000});
      }else {   
        this.toastr.success('Reponse envoyée avec succès', 'Succès',{timeOut: 2000});
        this.router.navigate(['/'])
      }
  }, error=>console.log("ERROR : "+error)); 
  }

}
