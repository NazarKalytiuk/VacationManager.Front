import { Component, OnInit } from '@angular/core';

import { Vacation } from 'app/core/models';
import { VacationService } from 'app/core/services';
import { PreloaderComponent } from 'app/core';
import { AuthService, UserService  } from 'app/auth/services';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private preloader : PreloaderComponent, private auth: AuthService, private vacation: VacationService, private userService: UserService) { }
  vacations;
  currenMonthVacations;
  ngOnInit() {
    this.vacation.getVacations().subscribe((c: Array<Vacation>)=> {
      this.vacations = c;
      this.currenMonthVacations = c.filter(v => {
        return new Date(v.startDate).getMonth() == new Date().getMonth() ;
      });
    }, err=> {
      console.log(err);
      this.preloader.close();
    }, () => {
      this.preloader.close();
    })
  }
  ngOnDestroy() {
    this.preloader.open();
  }

}
