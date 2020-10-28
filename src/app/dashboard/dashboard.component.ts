import { Component, OnInit } from '@angular/core';
import { ApiReclamantService } from '../services/api-reclamant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stat:any=[];
  constructor(private apiService:ApiReclamantService) { }

  ngOnInit(): void {
    this.apiService.getStatReclamant().subscribe(data=>{
      this.stat = data ; 
      console.log("result : "+data);
    }, error=>{
      console.log("Erreur : "+error);
    })
  }

}
