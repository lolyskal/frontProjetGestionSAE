
import {Component, OnInit} from "@angular/core";
import {AgrementObtenuMockService} from "./AgrementObtenu.mock.service";
import {AgrementObtenu} from "../shared/AgrementObtenu";



@Component({
  selector: 'app-AgrementObtenu',
  templateUrl:'./AgrementObtenu.component.html',
  styleUrls:['./AgrementObtenu.component.css']
})

export class AgrementObtenuComponent implements OnInit {

  AgrementObtenus: AgrementObtenu[] = [];
  constructor(private AgrementObtenuService: AgrementObtenuMockService){


  }
  ngOnInit(){
    this.AgrementObtenus = this.AgrementObtenuService.getAgrementObtenus();
  }
}


