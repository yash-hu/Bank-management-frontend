import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInterestModel } from '../../Interfaces/IInterestModel';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  private BaseUrl:string='http://localhost:5029/api/Interest';
  constructor(private httpClient:HttpClient) { }

  getInterestRates():Observable<IInterestModel[]>{
    return this.httpClient.get<IInterestModel[]>(`${this.BaseUrl}/All`);
  }
}
