import { OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { BaseService } from './';
import { AuthService, UserService } from 'app/auth/services';
import { Claim, User } from '../models';


@Injectable()
export class ClaimsService {
    constructor(private http: Http, private base: BaseService) { }

    getAllCLaims() {
        return this.http.get(`${this.base.HOST}claim/all`, this.base.options).map(c => c.json());
    }
    getClaims() {
        return this.http.get(`${this.base.HOST}user/claims`, this.base.options).map(c => c.json());
    }
    createClaim(claim: Claim): Observable<any> {
        return this.http.post(`${this.base.HOST}claim`, claim, this.base.options).map(c => c.json());
    }
    approveClaim(claim: Claim): Observable<any> {
        return this.http.post(`${this.base.HOST}claim/approve`, claim, this.base.options).map(c => c.json());
    }
    declineClaim(claim: Claim) {
        return this.http.post(`${this.base.HOST}claim/decline`, claim, this.base.options).map(c => c.json());
    }

}
