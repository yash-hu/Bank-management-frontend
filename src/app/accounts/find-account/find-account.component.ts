import { Component, OnInit } from '@angular/core';
import { IAccountModel } from '../../../Interfaces/IAccountModel';
import { AccountsService } from '../../Services/accounts.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-find-account',
  templateUrl: './find-account.component.html',
  styleUrl: './find-account.component.scss',
})
export class FindAccountComponent implements OnInit {
  accountsList!: IAccountModel[];

  constructor(
    private accountsService: AccountsService,
    private toast: ToastrService
  ) {}

  searchGroup: FormGroup = new FormGroup({
    accountNo: new FormControl('', [
      Validators.pattern('^[0-9]{12}'),
      Validators.required,
    ]),
  });

  handleSearch() {
    this.accountsService
      .getAccountByAccountNo(this.searchGroup.value.accountNo)
      .subscribe(
        (data) => {
          this.accountsList = [data];
        },
        (error) => {
          this.toast.error(error.error, error.statusTest, {
            positionClass: 'toast-bottom-right',
          });
          this.accountsList = [];
        }
      );
  }

  ngOnInit(): void {}
}
