import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { EmployeesComponent, ClaimsComponent, ROUTES } from './'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
    RouterModule.forChild(ROUTES),
  ],
  declarations: [ClaimsComponent, EmployeesComponent]
})
export class ManagerModule { }
