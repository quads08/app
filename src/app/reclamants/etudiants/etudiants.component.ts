import { Component, OnInit } from '@angular/core';
import { ApiReclamantService } from 'src/app/services/api-reclamant.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  etudiants:any =[];
  constructor(private apiService:ApiReclamantService) { }

  ngOnInit(): void {
    this.getAllReclamants();
  }

  getAllReclamants(){  
    this.apiService.allReclamants("Etudiant").subscribe(data=>{
      console.log("resultttt  : "+data['RESPONSE']); 
      if(data['RESPONSE']!="ERREUR"){
        this.etudiants = data;  } 
    },error=>{
      console.log("Error : "+error);
    });
  }

}
