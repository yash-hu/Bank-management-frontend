import { DatePipe, formatDate } from '@angular/common';
import { ICustomerModel } from './../../../Interfaces/ICustomerModel';
import { Component, OnInit } from '@angular/core';
import { EditCustomerSharedService } from '../../Services/edit-customer-shared.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../../Services/customers.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.scss',
})
export class EditCustomerComponent implements OnInit {
  customerRow!: ICustomerModel;
  sub!: Subscription;

  constructor(
    private editSharedService: EditCustomerSharedService,
    private datePipe: DatePipe,
    private customerService: CustomersService,
    private toast: ToastrService,
    private router: Router
  ) {}

  handleSubmit(): void {
    this.customerService.updateCustomerDetails(this.customerRow).subscribe(
      (response) => {
        this.toast.success(response, 'Success', {
          positionClass: 'toast-bottom-right',
        });
        this.router.navigateByUrl('/customers');
      },
      (error) => {
        this.toast.error(error.error, error.statusText, {
          positionClass: 'toast-bottom-right',
        });
      }
    );
  }

  ngOnInit(): void {
    this.sub = this.editSharedService.currentData$.subscribe(
      (data: ICustomerModel) => {
        data.dateOfBirth = formatDate(data.dateOfBirth, 'yyyy-MM-dd', 'en-US');
        this.customerRow = data;
        console.log(data);
        // console.log( typeof data);
        // console.log(this.customerRow);
      },
      (error) => {
        this.toast.error(error.error, error.statusText, {
          positionClass: 'toast-bottom-right',
        });
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
