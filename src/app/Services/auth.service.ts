import { Injectable } from '@angular/core';
import { ILoginData } from '../../Interfaces/ILoginData';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BaseUrl: string = 'http://localhost:5029/api/Auth';
  constructor(private httpClient: HttpClient) {}

  login(loginData: ILoginData): Observable<string> {
    return this.httpClient.post(`${this.BaseUrl}/Login`, loginData, {
      responseType: 'text',
    });
  }

  logOut(): Observable<any> {
    localStorage.removeItem('token');
    return of({ status: 'success' });
  }

  isLoggedIn(): boolean {
    let dataObject = localStorage.getItem('token');
    if (dataObject == null) return false;
    return true;
  }
}
