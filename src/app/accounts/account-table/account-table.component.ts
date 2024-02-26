import { Component, Input } from '@angular/core';
import { IAccountModel } from '../../../Interfaces/IAccountModel';
import { ToastrService } from 'ngx-toastr';
import { AccountsService } from '../../Services/accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-table',
  templateUrl: './account-table.component.html',
  styleUrl: './account-table.component.scss'
})
export class AccountTableComponent {
  tableHeaders:string[]=['Account No','Account Type','Balance','Opening Date','Transactions','Status','Delete'];
  @Input() accountsList!:IAccountModel[]

  constructor(private toast:ToastrService,private accountService:AccountsService,private router:Router){}


  handleStatusChange(accountNo:number,status:boolean):void{
    this.accountService.changeStatus(status,accountNo).subscribe(
      (response)=>{
        this.toast.success(response,"Success",{positionClass:'toast-bottom-right'});
        for(let account of this.accountsList){
          if(account.accountNo===accountNo){
            account.accountStatus=status;
            break;
          }
        }

      },
      (error)=>{
        // console.log(error);
        this.toast.error(error.error,error.statusText,{positionClass:'toast-bottom-right'});
      }
    )
  }

  handleDelete(accountNo:number):void{
    this.accountService.deleteAccount(accountNo).subscribe(
      (response)=>{
        this.toast.success(response,"Success",{positionClass:'toast-bottom-right'});
        this.accountsList=this.accountsList.filter(account=>account.accountNo!=accountNo);
      },
      (error)=>{
        this.toast.error(error.error,error.statusText,{positionClass:'toast-bottom-right'});
      }
    )
  }

  handleViewTransaction(accountNo:number):void{
    this.router.navigateByUrl(`transactions/Transactions/Accounts/${accountNo}`);
  }
}
