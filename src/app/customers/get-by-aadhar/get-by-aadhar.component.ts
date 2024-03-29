import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../../Services/customers.service';
import { ICustomerModel } from '../../../Interfaces/ICustomerModel';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-get-by-aadhar',
  templateUrl: './get-by-aadhar.component.html',
  styleUrl: './get-by-aadhar.component.scss',
})
export class GetByAadharComponent {
  customerList: ICustomerModel[] = [];

  constructor(
    private customerService: CustomersService,
    private toast: ToastrService,
    private spinner:NgxSpinnerService
  ) {}

  searchByAadharForm: FormGroup = new FormGroup({
    aadharNo: new FormControl('', [
      Validators.pattern('^[0-9]{12}$'),
      Validators.required,
    ]),
  });

  searchByNameForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+'),
    ]),
  });

  searchByAccountNoForm: FormGroup = new FormGroup({
    accountNo: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{12}'),
    ]),
  });

  getCustomerListDataByAadhar(): void {
    this.spinner.show();
    this.customerService
      .getCustomerByAadharNo(this.searchByAadharForm.value.aadharNo)
      .subscribe(
        (response) => {
          this.spinner.hide();
          this.customerList = [response];
        },
        (error) => {
          this.spinner.hide();
          this.toast.error(error.error, error.statusText, {
            positionClass: 'toast-bottom-right',
          });
          this.customerList = [];
        }
      );
  }

  getCustomerListDataByAccountNo():void{
    this.spinner.show();
    this.customerService
      .getCustomerByAccountNo(this.searchByAccountNoForm.value.accountNo)
      .subscribe(
        (response) => {
          this.spinner.hide();
          this.customerList = [response];
        },
        (error) => {
          this.spinner.hide();
          this.toast.error(error.error, error.statusText, {
            positionClass: 'toast-bottom-right',
          });
          this.customerList = [];
        }
      );
  }

  getCustomerListDataByName(): void {
    this.spinner.show();
    this.customerService
      .getCustomersBySimilarName(this.searchByNameForm.value.name)
      .subscribe(
        (response) => {
          this.spinner.hide();
          if (response.length == 0) {
            this.toast.error(
              'No customers found with matching name',
              'Not found',
              { positionClass: 'toast-bottom-right' }
            );
            this.customerList = [];
          } else {
            this.customerList = response;
          }
        },
        (error) => {
          this.spinner.hide();
          this.toast.error(error.error, error.statusText, {
            positionClass: 'toast-bottom-right',
          });
          this.customerList = [];
        }
      );
  }
}
