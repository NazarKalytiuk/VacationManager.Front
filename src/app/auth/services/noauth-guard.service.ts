import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'app/core/services';

@Injectable()
export class NoAuthGuardService implements CanActivate {

  constructor(private router: Router, private locaStorageService: LocalStorageService) { }
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.locaStorageService.getItem('role')) {
      return true;
    }
    if (this.locaStorageService.getItem('role').toString() === "1") {
      console.log('1', state.url);
      this.router.navigate(['manager/claims']);
      return false;
    } else if (this.locaStorageService.getItem('role').toString() === "0") {
      console.log('2', state.url);
      this.router.navigate(['employee']);
      return false;
    }
    // else if (!this.locaStorageService.getItem('role') && state.url != '/auth/google/callback') {
    //   console.log('3', state.url);
    //   this.router.navigate(['login']);
    //   return false;
    // }
    console.log('4', state.url);
    return true;
  }

}
