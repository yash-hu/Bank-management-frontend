import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsHomeComponent } from './accounts-home/accounts-home.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { GetAccountComponent } from './get-account/get-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FindAccountComponent } from './find-account/find-account.component';
import { AccountTableComponent } from './account-table/account-table.component';
import { SharedModule } from '../shared/shared.module';
import { AccountsRoutingModule } from './accounts-routing.module';

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
    AccountsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [AccountsHomeComponent],
})
export class AccountsModule {}
