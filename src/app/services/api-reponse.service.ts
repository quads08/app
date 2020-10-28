import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiReponseService {

  urlAPI = "http://localhost:4200/api_polytech/Reponse/";
  constructor(private http: HttpClient) { } 
  
  addReponse(rep){ 
    return this.http.post(this.urlAPI+"ajout.php", rep);
  } 

  allReponses(){ 
    return this.http.get(this.urlAPI+"all.php");
  } 

  getReponsesForUser(id){ 
    return this.http.get(this.urlAPI+"allReponseReclamationbyUser.php?id="+id);
  } 

  repOfReclamation(id){ 
    return this.http.get(this.urlAPI+"repOfReclamation.php?id="+id);
  }
}
