import { Component, OnInit } from '@angular/core';
import { ApiReclamationService } from 'src/app/services/api-reclamation.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mes-reclamations',
  templateUrl: './mes-reclamations.component.html',
  styleUrls: ['./mes-reclamations.component.css']
})
export class MesReclamationsComponent implements OnInit {
  recs:any = [];
  idU:number ; 
  modalContent:undefined ;
  constructor(private service:ApiReclamationService, private toastr: ToastrService, private modalService: NgbModal){ 
    this.idU = parseInt(localStorage.getItem("userID"));
    console.log("ID USER SESSION : "+this.idU);
  }

  ngOnInit(): void {  
    this.getMesReclamations();
  }
 

  getMesReclamations(){ 
    this.service.mylReclamantions(this.idU).subscribe(data=>{ 
      if(data['RESPONSE']!="ERREUR"){this.recs = data;  } 
    },error=>{
      console.log("Error : "+error);
    });
  }




  openModal(targetModal, reclamation) {
    this.modalContent = reclamation; 
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static'
    });
    
   }
 
   
}
