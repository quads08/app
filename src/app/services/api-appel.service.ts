import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAppelService { 

  urlAPI = "http://localhost:4200/api_polytech/Appel/";
  constructor(private http: HttpClient) { }

  addAppel(app){ 
    return this.http.post(this.urlAPI+"ajout.php", app);
  } 

  allAppels(){ 
    return this.http.get(this.urlAPI+"all.php");
  } 

  allAppelsByUser(id){ 
    return this.http.get(this.urlAPI+"allAppelByUser.php?id="+id);
  } 


}
