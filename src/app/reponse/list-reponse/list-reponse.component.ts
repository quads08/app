import { Component, OnInit } from '@angular/core'; 
import { ToastrService } from 'ngx-toastr';
import { ApiReponseService } from '../../services/api-reponse.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-reponse',
  templateUrl: './list-reponse.component.html',
  styleUrls: ['./list-reponse.component.css']
})
export class ListReponseComponent implements OnInit {
  reponses:any = [];
  modalContent:undefined ;
  idU:number; 
  isReclamant:boolean = false  ; 
  constructor(private service:ApiReponseService, private toastr: ToastrService, 
    private modalService: NgbModal, private router:Router){
   this.idU = parseInt(localStorage.getItem("userID"));
  }

  ngOnInit(): void { 
    console.log("roleee : "+localStorage.getItem("roleUser"));
     if(localStorage.getItem("roleUser")=="ADMIN"){
       this.isReclamant = false ;
        this.getAllReponses();
     }else{
      this.isReclamant = true ;
        this.getReponsesReclamationUser();
     } 
    
  }
 
  getAllReponses(){ 
    this.service.allReponses().subscribe(data=>{ 
      if(data['RESPONSE']!="ERREUR"){this.reponses = data;  } 
    },error=>{
      console.log("Error : "+error);
    });
  }

  getReponsesReclamationUser(){ 
    this.service.getReponsesForUser(this.idU).subscribe(data=>{ 
      if(data['RESPONSE']!="ERREUR"){this.reponses = data;  } 
    },error=>{
      console.log("Error : "+error);
    });
  }

  openModal(targetModal, info) {
    this.modalContent = info; 
    this.modalService.open(targetModal, {
     centered: true,
     size: 'lg',
     backdrop: 'static'
    }); 
  }


  goToAppel(idRep){
    this.modalService.dismissAll();
    console.log("ID is : "+idRep);
    this.router.navigate(['home/appel/add'], { queryParams: { id: idRep} });
  }
 
   
}
