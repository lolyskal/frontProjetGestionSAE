
import {Component, OnInit} from "@angular/core";
import {Canton} from "../shared/Canton";
import {CantonMockService} from "./Canton.mock.service";

@Component({
  selector: 'app-Canton',
  templateUrl:'./Canton.component.html',
  styleUrls:['./Canton.component.css']
})

export class CantonComponent implements OnInit {

  Cantons: Canton[] = [];
  constructor(private CantonService: CantonMockService){


  }
  ngOnInit(){
    this.Cantons = this.CantonService.getCantons();
  }
}


