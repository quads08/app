import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiReclamationService {

  urlAPI = "http://localhost:4200/api_polytech/Reclamation/";
  constructor(private http: HttpClient) { }


  addReclamantion(rec){ 
    return this.http.post(this.urlAPI+"ajout.php", rec);
  } 

  allReclamantions(){ 
    return this.http.get(this.urlAPI+"all.php");
  } 

  mylReclamantions(id){ 
    return this.http.get(this.urlAPI+"myReclamations.php?id="+id);
  } 
}
