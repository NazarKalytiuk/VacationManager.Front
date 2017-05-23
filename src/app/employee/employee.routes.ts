import { EmployeeComponent, ClaimsComponent } from '../employee';
import { EmployeeGuardService } from '../auth/services';

const ROUTES = [
    { path: 'employee', component: EmployeeComponent, canActivate: [EmployeeGuardService] },
    { path: 'employee/claims', component: ClaimsComponent, canActivate: [EmployeeGuardService] },
];
export { ROUTES }