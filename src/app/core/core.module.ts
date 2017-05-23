import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimsService, LocalStorageService, BaseService, VacationService, PreloaderComponent } from './'


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PreloaderComponent],
  providers: [
    VacationService,
    BaseService,
    LocalStorageService,
    ClaimsService,
    PreloaderComponent
  ],
  exports: [
    PreloaderComponent
  ]
})
export class CoreModule { }
