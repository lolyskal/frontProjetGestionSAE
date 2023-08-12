import {Commune} from "../shared/Commune";
import {Injectable} from "@angular/core";

@Injectable()
export class CommuneMockService{

  private COMMUNES : Commune[] = [];

  public getCommunes(): Commune[]{
    return this.COMMUNES;
  }
}
