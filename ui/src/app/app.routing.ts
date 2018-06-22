import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ListComponent as UsersListComponent } from './users/list/list.component';
import { CreateComponent as CreateUserComponent } from './users/create/create.component';
import { EditComponent as EditUserComponent } from './users/edit/edit.component';
import { EmissionPointsComponent } from './emission-points/emission-points.component';
import { ListComponent as EmissionPointsListComponent } from './emission-points/list/list.component';
import { CreateComponent as CreateEmissionPointComponent } from './emission-points/create/create.component';
import { EditComponent as EditEmissionComponentComponent } from './emission-points/edit/edit.component';
import { ServicesComponent } from './services/services.component';
import { ListComponent as ServicesListComponent } from './services/list/list.component';
import { EditComponent as EditServiceComponent } from './services/edit/edit.component';
import { CreateComponent as CreateServiceComponent } from './services/create/create.component';
import { OrdersComponent } from './orders/orders.component';
import { QueriesComponent } from './queries/queries.component';
import { ReportsComponent } from './reports/reports.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      // settings
      {
        path: 'settings',
        component: SettingsComponent
      },
      // users
      {
        path: 'users',
        component: UsersComponent,
        children: [
          {
            path: '',
            component: UsersListComponent
          },
          {
            path: 'new',
            component: CreateUserComponent,
          },
          {
            path: ':username/edit',
            component: EditUserComponent,
          }
        ]
      },
      // emission points or counters
      {
        path: 'emission_points',
        component: EmissionPointsComponent,
        children: [
          {
            path: '',
            component: EmissionPointsListComponent,
          },
          {
            path: 'new',
            component: CreateEmissionPointComponent
          },
          {
            path: ':id/edit',
            component: EditEmissionComponentComponent
          }
        ]
      },
      // services
      {
        path: 'services',
        component: ServicesComponent,
        children: [
          {
            path: '',
            component: ServicesListComponent
          },
          {
            path: 'new',
            component: CreateServiceComponent
          },
          {
            path: ':code/edit',
            component: EditServiceComponent
          }
        ]
      },
      // orders
      {
        path: 'orders',
        component: OrdersComponent
      },
      // queries
      {
        path: 'queries',
        component: QueriesComponent
      },
      // reports
      {
        path: 'reports',
        component: ReportsComponent
      },
      // perfil
      {
        path: ':username/profile',
        component: ProfileComponent
      }
    ],
  }
];
