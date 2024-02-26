import { TransactionsService } from './../../Services/transactions.service';
import { Component, OnInit } from '@angular/core';
import { ITransactionDetailsModel } from '../../../Interfaces/ITransactionDetailsModel';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transaction-info',
  templateUrl: './transaction-info.component.html',
  styleUrl: './transaction-info.component.scss'
})
export class TransactionInfoComponent implements OnInit{

  transactions!:ITransactionDetailsModel[];

  constructor(private route:ActivatedRoute,private toast:ToastrService,private transactionService:TransactionsService){}

  getTransactionListByAccountNo(): void {
    
    let accountNo:number=this.route.snapshot.params['accountNo'];
    console.log(accountNo);
    
    this.transactionService
      .getTransactionsByAccountNo(accountNo)
      .subscribe(
        (data) => {
          if (data.length == 0) {
            this.toast.error('No transactions Found', 'Not Found', {
              positionClass: 'toast-bottom-right',
            });
            this.transactions = [];
          } else {
            this.transactions = data;
          }
        },
        (error) => {
          this.toast.error(error.error, error.statusText, {
            positionClass: 'toast-bottom-right',
          });
          this.transactions = [];
        }
      );
  }

  ngOnInit(): void {
    this.getTransactionListByAccountNo();
  }
}
