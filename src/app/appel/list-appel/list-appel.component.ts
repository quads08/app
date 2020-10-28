import { Component, OnInit } from '@angular/core'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiAppelService } from '../../services/api-appel.service';

@Component({
  selector: 'app-list-appel',
  templateUrl: './list-appel.component.html',
  styleUrls: ['./list-appel.component.css']
})
export class ListAppelComponent implements OnInit {
  appels:any = [];
  idU : number ; 
  modalContent:undefined ;
  constructor(private service:ApiAppelService, private toastr: ToastrService, private modalService: NgbModal){
    console.log("user ID : "+localStorage.getItem("userID"));
    this.idU = parseInt(localStorage.getItem("userID"));
  }

  ngOnInit(): void { 
    console.log("roleee : "+localStorage.getItem("roleUser"));
     if(localStorage.getItem("roleUser")=="ADMIN"){
        this.getAllAppels();
     }else{
        this.getAppelsUser();
     }   
  }
 

  getAllAppels(){ 
    this.service.allAppels().subscribe(data=>{ 
      if(data['RESPONSE']!="ERREUR"){this.appels = data;  } 
    },error=>{
      console.log("Error : "+error);
    });
  }

  getAppelsUser(){ 
    this.service.allAppelsByUser(this.idU).subscribe(data=>{ 
      if(data['RESPONSE']!="ERREUR"){this.appels = data;  } 
    },error=>{
      console.log("Error : "+error);
    });
  }
  

  openModal(targetModal, appell) {
    this.modalContent = appell; 
    this.modalService.open(targetModal, {
     centered: true,
     size: 'lg',
     backdrop: 'static'
    }); 
  }
   
}
