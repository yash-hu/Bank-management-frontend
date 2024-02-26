import { Component, Input } from '@angular/core';
import { ITransactionDetailsModel } from '../../../Interfaces/ITransactionDetailsModel';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrl: './transactions-table.component.scss'
})
export class TransactionsTableComponent {
 @Input() transactionList!:ITransactionDetailsModel[];

 tableHeaders:string[]=['Transaction Id','Account No','Transaction Type','Transaction Time','Transaction Amount','Available Balance'];
}
