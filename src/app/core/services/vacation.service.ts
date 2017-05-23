import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { BaseService } from './';


@Injectable()
export class VacationService {
  constructor(private http: Http, private base: BaseService) { }
  getVacations() {
    return this.http.get(`${this.base.HOST}vacations`, this.base.options).map(c => c.json());
  }

}
