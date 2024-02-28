import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EditCustomerSharedService } from './edit-customer-shared.service';
import { ICustomerModel } from '../../Interfaces/ICustomerModel';

@Injectable({
  providedIn: 'root',
})
export class EditGuardService implements CanActivate {
  constructor(
    private sharedService: EditCustomerSharedService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.sharedService.currentData$.subscribe((data: ICustomerModel) => {
      if (data.customerId == 0) {
        this.router.navigateByUrl('/customers');
        return false;
      }
      return true;
    });
    return true;
  }
}
