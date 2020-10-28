import { Component, OnInit } from '@angular/core';
import { ApiReclamantService } from 'src/app/services/api-reclamant.service';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.css']
})
export class EntreprisesComponent implements OnInit {
  entreprises: any = [];
  constructor(private apiService: ApiReclamantService) {}

  ngOnInit(): void {
    this.getAllReclamants();
  }

  getAllReclamants() {
    this.apiService.allReclamants('Entreprise').subscribe(
      data => {
        console.log('resultttt  : ' + data['RESPONSE']);
        if (data['RESPONSE'] != 'ERREUR') {
          this.entreprises = data;
        }
      },
      error => {
        console.log('Error : ' + error);
      }
    );
  }
}
