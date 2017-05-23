import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material'
import 'hammerjs';

import { NgSpinningPreloader } from 'ng2-spinning-preloader';
import { SidebarModule } from './sidebar/sidebar.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { EmployeeModule } from './employee/employee.module';
import { ManagerModule } from './manager/manager.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NavbarModule,
    SidebarModule,
    HttpModule,
    CoreModule,
    EmployeeModule,
    ManagerModule,
    AuthModule,
    RouterModule.forRoot([]),
    MaterialModule.forRoot(),
  ],
  providers: [NgSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
