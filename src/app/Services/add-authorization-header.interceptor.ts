import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

export const addAuthorizationHeaderInterceptor: HttpInterceptorFn = (
  req,
  next
) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  const token = localStorage.getItem('token');
  let clonedRequest;
  if (token) {
    clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return next(clonedRequest ?? req).pipe(
    catchError((error) => {
      console.log(error);

      if (
        (error.status === 401 && error.error === null) ||
        (error.status === 403 && error.error === null)
      ) {
        authService.logOut().subscribe((response) => {
          confirm('Token expired');
          error.error = 'Please Login Again...';
          error.statusText = 'Session Expired.';
          router.navigateByUrl('/login');
        });
      }
      return throwError(error);
    })
  );
};
