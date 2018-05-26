import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminConsoleComponent } from './admin-console/admin-console.component';
import { CanActivateViaAuthGuard } from './CanActivateViaAuthGuard';

export const routes: Routes = [

    {
        path: 'adminConsole', component: AdminConsoleComponent
        , canActivate: [
          
            CanActivateViaAuthGuard
        ]
    },
    { path: 'logout/:action', component: LoginComponent },
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent }
];