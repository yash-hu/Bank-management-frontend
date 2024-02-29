import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddAccountModel } from '../../Interfaces/IAddAccountModel';
import { IAccountModel } from '../../Interfaces/IAccountModel';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  private BaseUrl: string = 'http://localhost:5029/api/Accounts';

  constructor(private httpclient: HttpClient) {}

  changeStatus(status: boolean, accountNo: number): Observable<string> {
    return this.httpclient.put(`${this.BaseUrl}/Update/${accountNo}`, status, {
      responseType: 'text',
    });
  }

  deleteAccount(accountNo: number): Observable<string> {
    return this.httpclient.delete(`${this.BaseUrl}/Delete/${accountNo}`, {
      responseType: 'text',
    });
  }

  addAccount(newAccountData: IAddAccountModel): Observable<string> {
    return this.httpclient.post(`${this.BaseUrl}/Add`, newAccountData, {
      responseType: 'text',
    });
  }

  getAllAccounts(): Observable<IAccountModel[]> {
    return this.httpclient.get<IAccountModel[]>(`${this.BaseUrl}/All`);
  }

  getAccountByAccountNo(accountNo: number): Observable<IAccountModel> {
    return this.httpclient.get<IAccountModel>(`${this.BaseUrl}/${accountNo}`);
  }
  
}
