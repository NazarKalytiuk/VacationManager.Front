import { Component, OnInit } from '@angular/core';
import { PreloaderComponent } from 'app/core';
import { Claim } from 'app/core/models';
import { ClaimsService } from 'app/core/services';


@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {

  constructor(private claimService: ClaimsService, private preloader: PreloaderComponent) { }
  claims;
  ngOnInit() {
    this.claimService.getAllCLaims().subscribe(c => {
      console.log(c)
      this.claims = c;
    }, err => { }, () => {
      this.preloader.close();
    })
  }
  error;
  approveClaim(claim: Claim) {
    this.error = null;
    this.preloader.open();
    console.log(claim);
    claim.vacation.startDate = new Date(claim.vacation.startDate);
    this.claimService.approveClaim(claim).subscribe(c => {
      this.claimService.getAllCLaims().subscribe(c => {
        this.claims = c;
      }, err => { }, () => {
        this.preloader.close();
      })
    }, err => {
      this.error = err.statusText;
    }, () => {
      // this.preloader.close();
    })
  }

  declineClaim(claim: Claim) {
    this.preloader.open();
    this.error = null;
    claim.vacation.startDate = new Date(claim.vacation.startDate);
    this.claimService.declineClaim(claim).subscribe(c => {
      this.claimService.getAllCLaims().subscribe(c => {
        this.claims = c;
      }, err => { this.preloader.close(); }, () => {
        this.preloader.close();
      })
    }, err => {
      this.error = err.statusText;
      this.preloader.close();
    }, () => {
      // this.preloader.close();
    })
  }
  update() {
    this.preloader.open();
    this.claimService.getAllCLaims().subscribe(c => {
      console.log(c)
      this.claims = c;
    }, err => {
      this.preloader.close();
    }, () => {
      this.preloader.close();
    })
  }
  ngOnDestroy() {
    this.preloader.open();
  }

}
