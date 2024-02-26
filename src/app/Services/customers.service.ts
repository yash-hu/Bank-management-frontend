import { IAccountModel } from './../../Interfaces/IAccountModel';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomerModel } from '../../Interfaces/ICustomerModel';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private BaseUrl:string ="http://localhost:5029/api/Customers";
  constructor(private httpclient:HttpClient) { }

  getAllCustomers():Observable<HttpResponse<ICustomerModel[]>>{
    return this.httpclient.get<ICustomerModel[]>(`${this.BaseUrl}/All`,{observe:'response'});
  }

  deleteCustomer(customerId:number):Observable<any>{
    return this.httpclient.delete(`${this.BaseUrl}/Delete/${customerId}`,{responseType:'text'});
  }

  getAccountsByCustomerId(customerId:number):Observable<IAccountModel[]>{
    return this.httpclient.get<IAccountModel[]>(`${this.BaseUrl}/Accounts/${customerId}`);
  }

  getCustomerByAadharNo(aadharNo:string):Observable<ICustomerModel>{
    return this.httpclient.get<ICustomerModel>(`${this.BaseUrl}/${aadharNo}`);
  }

  getCustomersBySimilarName(name:string):Observable<ICustomerModel[]>{
    return this.httpclient.get<ICustomerModel[]>(`${this.BaseUrl}/All/${name}`);
  }

  updateCustomerDetails(data:ICustomerModel):Observable<string>{
    return this.httpclient.put(`${this.BaseUrl}/Update/${data.customerId}`,{
      firstName:data.firstName,
      middlename:data.middleName,
      lastName:data.lastName,
      email:data.email,
      phone:data.phone,
      dateOfBirth:data.dateOfBirth,
      address:data.address,
    },{responseType:'text'});
  }

}
