import { ClaimsComponent } from './claims/claims.component';
import { ManagerGuardService } from '../auth/services/manager-guard.service';
import { EmployeesComponent } from './employees/employees.component';


const ROUTES = [
    { path: 'manager/claims', component: ClaimsComponent, canActivate: [ManagerGuardService] },
    { path: 'manager/employees', component: EmployeesComponent, canActivate: [ManagerGuardService] },
]
export { ROUTES }