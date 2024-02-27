import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsHomeComponent } from './transactions-home/transactions-home.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { TransactionsTableComponent } from './transactions-table/transactions-table.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionInfoComponent } from './transaction-info/transaction-info.component';

@NgModule({
  declarations: [
    TransactionsHomeComponent,
    AddTransactionComponent,
    ViewTransactionsComponent,
    TransactionsTableComponent,
    TransactionInfoComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [TransactionsHomeComponent, TransactionsTableComponent],
})
export class TransactionsModule {}
