import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from 'app/core/services';


@Injectable()
export class EmployeeGuardService {

  constructor(private localStorageService : LocalStorageService) { }
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.localStorageService.getItem('role')) { 
      return true;
    }
    return false;
  }

}
