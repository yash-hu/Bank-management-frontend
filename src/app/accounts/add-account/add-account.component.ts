import { Component, OnInit } from '@angular/core';
import { IAddAccountModel } from '../../../Interfaces/IAddAccountModel';
import { AccountsService } from '../../Services/accounts.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.scss',
})
export class AddAccountComponent implements OnInit {
  accountData: IAddAccountModel = {
    aadharNo: '',
    address: '',
    dateOfBirth: '',
    email: '',
    firstName: '',
    lastName: '',
    middleName: '',
    phone: '',
    accountType: 1,
    balance: 1000,
  };

  constructor(
    private accountService: AccountsService,
    private toast: ToastrService,
    private spinner:NgxSpinnerService
  ) {}

  handleSubmit(): void {
    // this.accountData.accountType= +this.accountData.accountType;
    // console.log(this.accountData);
    this.spinner.show();
    this.accountService.addAccount(this.accountData).subscribe(
      (response) => {
        this.spinner.hide();
        this.toast.success(response, 'Success', {
          positionClass: 'toast-bottom-right',
        });
      },
      (error) => {
        this.spinner.hide();
        this.toast.error(error.error, error.statusText, {
          positionClass: 'toast-bottom-right',
        });
      }
    );
  }

  ngOnInit(): void {}
}
