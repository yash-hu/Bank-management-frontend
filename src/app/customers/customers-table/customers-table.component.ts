import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../Services/customers.service';
import { ICustomerModel } from '../../../Interfaces/ICustomerModel';
import { HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { EditCustomerSharedService } from '../../Services/edit-customer-shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrl: './customers-table.component.scss',
})
export class CustomersTableComponent implements OnInit {
  customersList: ICustomerModel[] = [];
  tableHeaders: string[] = [
    'EDIT',
    'CUSTOMER NAME',
    'EMAIL',
    'MOBILE NO',
    'AADHAR NO',
    'DATE OF BIRTH',
    'ADDRESS',
    'ACCOUNT',
    'Delete',
  ];

  constructor(
    private customerService: CustomersService,
    private toast: ToastrService,
    private editSharedService: EditCustomerSharedService,
    private router: Router
  ) {}

  getAllCustomers(): void {
    this.customerService.getAllCustomers().subscribe(
      (response: HttpResponse<ICustomerModel[]>) => {
        if (response.status == 200) {
          this.customersList = response.body!;
          console.log(response);
          console.log(this.customersList);
        } else {
          console.log(response);
        }
      },
      (error) => {
        this.toast.error(error.error, error.statusText, {
          positionClass: 'toast-bottom-right',
        });
        console.log(error);
      }
    );
  }

  //handle edit button click
  handleEdit(customer: ICustomerModel): void {
    this.editSharedService.setData(customer);
    this.router.navigate(['customers/edit']);
  }

  handleDelete(customerId: number): void {
    this.customerService.deleteCustomer(customerId).subscribe(
      (response) => {
        console.log(response);
        this.toast.success(response, 'Deleted successfully...', {
          closeButton: true,
          positionClass: 'toast-bottom-right',
        });
        this.ngOnInit();
      },
      (error) => {
        this.toast.error(error.error, error.statusText, {
          closeButton: true,
          positionClass: 'toast-bottom-right',
        });
      }
    );
  }
  ngOnInit(): void {
    this.getAllCustomers();
  }
}
