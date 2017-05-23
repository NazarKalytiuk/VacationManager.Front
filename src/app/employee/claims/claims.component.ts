import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { AuthService, UserService } from 'app/auth/services';
import { PreloaderComponent } from 'app/core';
import { ClaimsService, VacationService } from 'app/core/services'
import { Claim } from 'app/core/models'


@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit, OnDestroy {
  onChange() {
    this.max = this.getMax();
    this.array = new Array(this.max + 1);
  }
  constructor(private auth: AuthService, private vacation: VacationService, private userService: UserService,
    private claimService: ClaimsService, private preloader: PreloaderComponent) { }
  user;
  claims;
  max;
  array;
  error;
  count: number = 1;
  startDate: Date;
  ngOnInit() {
    this.preloader.open();
    this.startDate = new Date();
    this.userService.getUser().subscribe(c => {
      this.user = c;
    }, err => { }, () => {
      this.preloader.close();
    })
    this.claimService.getClaims().subscribe(c => {
      this.claims = c;
    }, err => { }, () => {
      this.preloader.close();
    })
    // let o1 = this.userService.getUser();
    // let o2 = this.claimService.getClaims();
    // Observable.merge(o1, o2).subscribe(c => {
    //   console.log(c);
    // })
    // Observable.forkJoin(o1, o2).subscribe(c => {
    //   this.user = c[0];
    //   this.claims = c[1];
    //   console.log(c[0]);
    //   console.log(c[1]);
    // }, err => {
    //   console.log(err);
    // }, () => {
    //   console.log('success');
    //   this.preloader.close();
    // })
  }
  getMax() {
    let date = new Date(this.startDate);
    let daysInCurrentMonths = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    return daysInCurrentMonths - date.getDate();
  }
  createClaim() {
    this.preloader.open();
    this.error = null;
    let claim = new Claim();
    claim.vacation = { startDate: new Date(this.startDate), count: this.count + 1 };
    this.claimService.createClaim(claim).subscribe(c => {
      this.claimService.getClaims().subscribe(c => {
        this.claims = c;
      }, err => { }, () => {
        this.preloader.close();
      })
    }, err => {
      this.error = err.statusText;
    })
  }
  ngOnDestroy() {
    this.preloader.open();
  }

}
