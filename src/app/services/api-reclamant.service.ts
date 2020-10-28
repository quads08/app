import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiReclamantService {
  urlAPI = 'http://localhost:4200/api_polytech/Reclamant/';
  constructor(private http: HttpClient) {}

  addReclamant(rec) {
    return this.http.post(this.urlAPI + 'ajout.php', rec);
  }

  allReclamants(role) {
    return this.http.get(this.urlAPI + 'all.php?role=' + role);
  }

  getStatReclamant() {
    return this.http.get(this.urlAPI + 'stat.php');
  }
}
