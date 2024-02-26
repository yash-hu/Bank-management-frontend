import { Component } from '@angular/core';
import { ITransactionDetailsModel } from '../../../Interfaces/ITransactionDetailsModel';
import { TransactionsService } from '../../Services/transactions.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrl: './view-transactions.component.scss',
})
export class ViewTransactionsComponent {
  transactionsList: ITransactionDetailsModel[] = [];

  constructor(
    private transactionService: TransactionsService,
    private toast: ToastrService
  ) {}

  searchByAccountNoForm: FormGroup = new FormGroup({
    accountNo: new FormControl(null, [
      Validators.pattern('^[0-9]{12}$'),
      Validators.required,
    ]),
  });

  searchByTransactionIdForm: FormGroup = new FormGroup({
    transactionId: new FormControl(null, [
      Validators.required,
      Validators.min(1),
    ]),
  });

  getTransactionListByAccountNo(): void {
    
    this.transactionService
      .getTransactionsByAccountNo(this.searchByAccountNoForm.value.accountNo)
      .subscribe(
        (data) => {
          if (data.length == 0) {
            this.toast.error('No transactions Found', 'Not Found', {
              positionClass: 'toast-bottom-right',
            });
            this.transactionsList = [];
          } else {
            this.transactionsList = data;
          }
        },
        (error) => {
          this.toast.error(error.error, error.statusText, {
            positionClass: 'toast-bottom-right',
          });
          this.transactionsList = [];
        }
      );
  }

  getTransactionListByTransactionId(): void {
  
    this.transactionService.getTransactionsByTransactionId(this.searchByTransactionIdForm.value.transactionId).subscribe(
      (data)=>{
        this.transactionsList=[data];
      },
      (error)=>{
        this.toast.error(error.error,error.statusText,{positionClass:'toast-bottom-right'});
        this.transactionsList=[];
      }
    )
  }
}
