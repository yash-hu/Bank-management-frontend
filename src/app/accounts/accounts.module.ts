import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsHomeComponent } from './accounts-home/accounts-home.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { GetAccountComponent } from './get-account/get-account.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FindAccountComponent } from './find-account/find-account.component';
import { AccountTableComponent } from './account-table/account-table.component';
import { AccountTypePipe } from '../Pipes/account-type.pipe';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AccountsHomeComponent,
    AddAccountComponent,
    GetAccountComponent,
    FindAccountComponent,
    AccountTableComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports:[
    AccountsHomeComponent,
  ]
})
export class AccountsModule { }
