import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'app/core/core.module';

import {
  UserService, EmployeeGuardService, ROUTES, AuthService, LoginCallbackComponent,
  LoginComponent, ManagerGuardService, NoAuthGuardService
} from './'

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [LoginComponent, LoginCallbackComponent],
  providers: [
    AuthService,
    EmployeeGuardService,
    ManagerGuardService,
    NoAuthGuardService,
    UserService
  ]
})
export class AuthModule { }
