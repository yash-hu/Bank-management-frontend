import { Component, Input } from '@angular/core';
import { ICustomerModel } from '../../../Interfaces/ICustomerModel';
import { CustomersService } from '../../Services/customers.service';
import { ToastrService } from 'ngx-toastr';
import { EditCustomerSharedService } from '../../Services/edit-customer-shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-customer-table',
  templateUrl: './get-customer-table.component.html',
  styleUrl: './get-customer-table.component.scss',
})
export class GetCustomerTableComponent {
  @Input() customersList!: ICustomerModel[];
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

  //handle edit button click
  handleEdit(customer: ICustomerModel): void {
    this.editSharedService.setData(customer);
    this.router.navigate(['customers/edit']);
  }

  handleDelete(customerId: number): void {
    if(confirm('Do you really want to delete?')){
      this.customerService.deleteCustomer(customerId).subscribe(
        (response) => {
          console.log(response);
          this.toast.success(response, 'Deleted successfully...', {
            closeButton: true,
            positionClass: 'toast-bottom-right',
          });
          this.customersList = this.customersList.filter(
            (customer) => customer.customerId != customerId
          );
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
  }
  
  ngOnInit(): void {}
}
