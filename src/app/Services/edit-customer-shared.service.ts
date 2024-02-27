import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICustomerModel } from '../../Interfaces/ICustomerModel';

@Injectable({
  providedIn: 'root',
})
export class EditCustomerSharedService {
  constructor() {}

  private data = new BehaviorSubject<ICustomerModel>({
    aadharNo: '',
    address: '',
    customerId: 0,
    dateOfBirth: new Date('2000-09-30'),
    email: '',
    firstName: '',
    lastName: '',
    middleName: '',
    phone: '',
  });
  currentData$ = this.data.asObservable();

  setData(data: any) {
    this.data.next(data);
  }
}
