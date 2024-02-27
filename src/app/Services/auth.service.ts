import { Injectable } from '@angular/core';
import { ILoginData } from '../../Interfaces/ILoginData';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(loginData: ILoginData): Observable<any> {
    let dataObject = JSON.stringify(loginData);
    localStorage.setItem('login', dataObject);
    return of({ status: 'success' });
  }

  logOut(): Observable<any> {
    localStorage.removeItem('login');
    return of({ status: 'success' });
  }

  isLoggedIn(): boolean {
    let dataObject = localStorage.getItem('login');
    if (dataObject == null) return false;
    // let parsedObject =JSON.parse(dataObject);
    return true;
  }
}
