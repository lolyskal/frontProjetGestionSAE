import {Injectable} from '@angular/core';
import {AgrementObtenu} from "../shared/AgrementObtenu";

@Injectable()
export class AgrementObtenuMockService{

  private AGREMENTOBTENUS : AgrementObtenu[] = [];


  public getAgrementObtenus(): AgrementObtenu[]{
    return this.AGREMENTOBTENUS;
  }
}
