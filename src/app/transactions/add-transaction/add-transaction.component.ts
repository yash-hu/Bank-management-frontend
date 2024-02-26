import { Component, OnInit } from '@angular/core';
import { ITransactionModel } from '../../../Interfaces/ITransactionModel';
import { TransactionsService } from '../../Services/transactions.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrl: './add-transaction.component.scss'
})
export class AddTransactionComponent implements OnInit{

  transactionData:ITransactionModel={
    accountNo:null,
    transactionType: false,
    transactionAmount: null,
  }

  Ttype:string='false';
  constructor(private transactionService:TransactionsService,private toast:ToastrService){}

  handleSubmit():void{
    console.log(this.transactionData);
    this.transactionData.transactionType= this.Ttype==='true'?true:false;
    this.transactionService.performTransaction(this.transactionData).subscribe(
      (response)=>{
        this.toast.success(response,"Success",{positionClass:'toast-bottom-right'});
      },
      (error)=>{
        console.log(error);
        this.toast.error(error.error,error.statusText,{positionClass:'toast-bottom-right'});
      }
    )
  }

  ngOnInit(): void {
    
  }
}
