import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../Services/customers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IAccountModel } from '../../../Interfaces/IAccountModel';
import { AccountsService } from '../../Services/accounts.service';

@Component({
  selector: 'app-accounts-info',
  templateUrl: './accounts-info.component.html',
  styleUrl: './accounts-info.component.scss'
})
export class AccountsInfoComponent implements OnInit{
  tableHeaders:string[]=['Account No','Account Type','Balance','Opening Date','Transactions','Status','Delete'];
  accountsList!:IAccountModel[]

  constructor(private customerService:CustomersService,private route:ActivatedRoute,private toast:ToastrService,private accountService:AccountsService,private router:Router){}


  handleStatusChange(accountNo:number,status:boolean):void{
    this.accountService.changeStatus(status,accountNo).subscribe(
      (response)=>{
        this.toast.success(response,"Success",{positionClass:'toast-bottom-right'});
        this.ngOnInit();
      },
      (error)=>{
        // console.log(error);
        this.toast.error(error.error,error.statusText,{positionClass:'toast-bottom-right'});
      }
    )
  }

  handleDelete(accountNo:number){
    this.accountService.deleteAccount(accountNo).subscribe(
      (response)=>{
        this.toast.success(response,"Success",{positionClass:'toast-bottom-right'});
        this.ngOnInit();
      },
      (error)=>{
        this.toast.error(error.error,error.statusText,{positionClass:'toast-bottom-right'});
      }
    )
  }

  handleViewTransaction(accountNo:number):void{
    this.router.navigateByUrl(`transactions/Transactions/Accounts/${accountNo}`);
  }

  getAccountsList(){
    let customerId:number = Number(this.route.snapshot.params['customerId']);
    this.customerService.getAccountsByCustomerId(customerId).subscribe(
      (data)=>{
        // console.log(data);
        this.accountsList=data;
        // console.log(this.accountsList);
        
      },
      (error)=>{
        this.toast.error(error,'Something went wrong...');
      }
    )
  }
  ngOnInit(): void {
    this.getAccountsList();
  }
}
