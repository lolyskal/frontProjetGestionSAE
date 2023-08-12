
import {Component, OnInit} from "@angular/core";
import {Agrement} from '../shared/Agrement';
import {NgForm} from "@angular/forms";
import {AgrementService} from "../service/agrement.service";


@Component({
  selector: 'app-Agrement',
  templateUrl:'./Agrement.component.html',
  styleUrls:['./Agrement.component.css']
})

export class AgrementComponent implements OnInit {

  agrements: Agrement[] = [];
  constructor(private agrementService: AgrementService){


  }
  ngOnInit(){
    this.agrements = this.agrementService.getAgrements();

  }
  onAddAgremet(approForm:NgForm){
    if (approForm.valid ){
      return ;
    }
    console.log(approForm.value);
    this.agrementService.create(approForm.value).subscribe(agrement =>
      this.agrements.push(agrement));
    approForm.reset();
    //console.log("Ajouté avec succès");
  }
}


