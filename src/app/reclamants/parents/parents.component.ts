import { Component, OnInit } from '@angular/core';
import { ApiReclamantService } from 'src/app/services/api-reclamant.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {
  parents:any =[];
  constructor(private apiService:ApiReclamantService) { }

  ngOnInit(): void {
    this.getAllReclamants();
  }

  getAllReclamants(){  
    this.apiService.allReclamants("Parent").subscribe(data=>{
      console.log("resultttt  : "+data['RESPONSE']); 
      if(data['RESPONSE']!="ERREUR"){
        this.parents = data;  } 
    },error=>{
      console.log("Error : "+error);
    });
  }

}