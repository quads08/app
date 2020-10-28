import { Component, OnInit } from '@angular/core';
import { ApiReclamationService } from 'src/app/services/api-reclamation.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.css']
})
export class ListReclamationComponent implements OnInit {
  recs:any = [];
  modalContent:undefined ;
  constructor(private service:ApiReclamationService, private toastr: ToastrService, 
    private modalService: NgbModal, private router:Router){
  }

  ngOnInit(): void {  
    this.getAllReclamations();
  }
 

  getAllReclamations(){ 
    this.service.allReclamantions().subscribe(data=>{ 
      if(data['RESPONSE']!="ERREUR"){this.recs = data;  } 
    },error=>{
      console.log("Error : "+error);
    });
  }


  openModal(targetModal, reclamation) {
    this.modalContent = reclamation; 
    this.modalService.open(targetModal, {
     centered: true,
     size: 'lg',
     backdrop: 'static'
    }); 
  }

  goToRep(idRec){
    this.modalService.dismissAll();
    console.log("ID is : "+idRec);
    this.router.navigate(['home/reponse/add'], { queryParams: { id: idRec} });
  }
 
   
}
