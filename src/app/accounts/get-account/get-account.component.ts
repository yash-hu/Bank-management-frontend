import { Component, OnInit } from '@angular/core';
import { IAccountModel } from '../../../Interfaces/IAccountModel';
import { AccountsService } from '../../Services/accounts.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-get-account',
  templateUrl: './get-account.component.html',
  styleUrl: './get-account.component.scss',
})
export class GetAccountComponent implements OnInit {
  accountsList!: IAccountModel[];

  constructor(
    private accountsService: AccountsService,
    private toast: ToastrService
  ) {} 

  getAllAccountsData(): void {
    this.accountsService.getAllAccounts().subscribe(
      (data) => {
        this.accountsList = data;
      },
      (error) => {
        this.toast.error(error.error, error.statusText, {
          positionClass: 'toast-bottom-right',
        });
      }
    );
  }

  ngOnInit(): void {
    this.getAllAccountsData();
  }
}
