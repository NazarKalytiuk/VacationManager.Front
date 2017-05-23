import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { SidebarModule } from 'app/sidebar/sidebar.module';

import { NavbarComponent, NavbarService } from './'

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    MaterialModule.forRoot(),
  ],
  exports: [
    NavbarComponent
  ],
  declarations: [NavbarComponent],
  providers: [
    NavbarService
  ]
})
export class NavbarModule { }
