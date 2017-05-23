import { LoginComponent, LoginCallbackComponent } from './';
import { NoAuthGuardService } from './services';


const ROUTES = [
    { path: 'login', component: LoginComponent, canActivate: [NoAuthGuardService] },
    { path: 'auth/google/callback', component: LoginCallbackComponent },
    { path: '', component: LoginComponent },
]
export { ROUTES }