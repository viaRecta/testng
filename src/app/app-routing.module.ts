import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// sabit sayfalar
import { LoginComponent } from './framework/login/login.component';
import { LogoutComponent } from './framework/logout/logout.component';
import { DashboardComponent } from './framework/dashboard/dashboard.component';
import { PageNotFoundComponent } from './framework/page-not-found/page-not-found.component';

// Login Service
import { RouteAuthService } from './components/route-auth.service';


const routes: Routes = [
    // login & dashboard
    { path: 'login', component: LoginComponent},
    { path: 'logout', component: LogoutComponent},
    { path: 'dashboard', component: DashboardComponent, canActivate:[RouteAuthService] },

    // bos ise dashboard yukle
    { path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full',
      canActivate:[RouteAuthService]
    },

    // izin yok ise login yukle

    // modules
    { path: 'purchasing', loadChildren: './purchasing/purchasing.module#PurchasingModule', canActivate:[RouteAuthService]},
    { path: 'planning', loadChildren: './planning/planning.module#PlanningModule', canActivate:[RouteAuthService]},

    // sayfa bulunamaz ise
    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    imports: [ RouterModule.forRoot(routes, { enableTracing: true } ) ],
    exports: [ RouterModule ],
    providers: []
})
export class AppRoutingModule {}