import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Account/home/index';
import { AuthGuard } from './Account/_guards/index';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';

export const routes: Routes = [
 
  { 
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
        canActivate: [
      AuthGuard
    ] ,
    data: {
      title: 'Home'
    },
  },
  { 
    path: 'login',
    component: LoginComponent
     },
  { 
      path: 'home',
      component: HomeComponent
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  {
    path: 'full-layout',
    component: DefaultLayoutComponent,
    data: {
      title: 'Admin'
    },
    canActivate:[
      AuthGuard
    ],
    children: [
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
