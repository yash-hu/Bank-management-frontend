import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountTypePipe } from '../Pipes/account-type.pipe';



@NgModule({
  declarations: [AccountTypePipe,],
  imports: [
    CommonModule
  ],
  exports:[AccountTypePipe,]
})
export class SharedModule { }
