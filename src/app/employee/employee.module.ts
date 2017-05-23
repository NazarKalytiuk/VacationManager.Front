import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import {ClaimsComponent, EmployeeComponent, ROUTES } from './'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
    RouterModule.forChild(ROUTES),
  ],
  declarations: [EmployeeComponent, ClaimsComponent]
})
export class EmployeeModule { }
