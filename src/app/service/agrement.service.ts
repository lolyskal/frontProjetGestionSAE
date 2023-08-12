import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Agrement} from "../shared/Agrement";
import {Observable} from "rxjs";
import { environnement } from '../../Environnement/environnement.prod';

@Injectable({
  providedIn: 'root'
})
export class AgrementService {

  constructor(private http: HttpClient) {
  }

  create(agrement: Agrement): Observable<Agrement> {
    return this.http.post<Agrement>(`${environnement.backendHost}/add/agrement`,agrement);

}

  getAgrements() {
    return [];
  }
}
