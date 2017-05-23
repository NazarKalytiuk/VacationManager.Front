import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuService, SidebarComponent } from './'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [SidebarComponent],
  exports: [
    SidebarComponent
  ],
  providers: [
    MenuService
  ]
})
export class SidebarModule { }
