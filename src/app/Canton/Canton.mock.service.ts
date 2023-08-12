import {Injectable} from '@angular/core';
import {Canton} from "../shared/Canton";
@Injectable()
export class CantonMockService{

  private CANTONS : Canton[] = [];


  public getCantons(): Canton[]{
    return this.CANTONS;
  }
}
