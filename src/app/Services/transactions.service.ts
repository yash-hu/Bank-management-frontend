import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITransactionModel } from '../../Interfaces/ITransactionModel';
import { Observable } from 'rxjs';
import { ITransactionDetailsModel } from '../../Interfaces/ITransactionDetailsModel';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private BaseUrl: string = 'http://localhost:5029/api/Transactions';
  constructor(private httpClient: HttpClient) {}

  performTransaction(transactionData: ITransactionModel): Observable<string> {
    return this.httpClient.post(`${this.BaseUrl}/Add`, transactionData, {
      responseType: 'text',
    });
  }

  getTransactionsByAccountNo(
    accountNo: number
  ): Observable<ITransactionDetailsModel[]> {
    return this.httpClient.get<ITransactionDetailsModel[]>(
      `${this.BaseUrl}/Account/${accountNo}`
    );
  }

  getTransactionsByTransactionId(
    transactionId: number
  ): Observable<ITransactionDetailsModel> {
    return this.httpClient.get<ITransactionDetailsModel>(
      `${this.BaseUrl}/${transactionId}`
    );
  }
}
