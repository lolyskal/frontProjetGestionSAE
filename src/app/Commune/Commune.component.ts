
import {Component, OnInit} from "@angular/core";
import {Commune} from "../shared/Commune";
import {CommuneMockService} from "./Commune.mock.service";

@Component({
  selector: 'app-Commune',
  templateUrl:'./Commune.component.html',
  styleUrls:['./Commune.component.css']
})

export class CommuneComponent implements OnInit {

  Communes: Commune[] = [];
  constructor(private CommuneService: CommuneMockService){


  }
  ngOnInit(){
    this.Communes = this.CommuneService.getCommunes();
  }
}


