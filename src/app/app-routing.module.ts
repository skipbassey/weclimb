import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { RelationshipComponent } from './home/relationship/relationship.component';
import { MenuComponent } from './menu/menu.component';
import { AdolescentComponent } from './home/adolescent/adolescent.component';
import { TeamComponent } from './team/team.component';
import { SchoolComponent } from './school/school.component';
import { OutreachComponent } from './outreach/outreach.component';
import { FeesComponent } from './fees/fees.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {
    path: 'home',
    component: MenuComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: "calendar",
    component: CalendarComponent
  },
  {
    path: 'services',
    component: HomePage,
    children: [
      {
        path: 'counseling/relationship',
        loadChildren: () => 
          import('./home/relationship/relationship.module').then(m => m.RelationshipModule)
      },
      {
        path: 'counseling/family',
        loadChildren: () =>
          import('./home/family/family.module').then(m => m.FamilyModule)
      },
      {
        path: 'counseling/career',
        loadChildren: () =>
          import('./home/career/career.module').then(m => m.CareerModule)
      },
      {
        path: 'counseling/adolescent',
        loadChildren: () => 
          import('./home/adolescent/adolescent.module').then(m => m.AdolescentModule)
      },
      {
        path: 'counseling/individual',
        loadChildren: () => 
          import('./home/individual/indivudal.module').then(m => m.IndividualModule)
      }
    ]
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'school-based-services',
    component: SchoolComponent
  },
  {
    path: 'outreach',
    component: OutreachComponent
  },
  {
    path: 'fees',
    component: FeesComponent
  },
  {
    path: 'appointments',
    component: AppointmentComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
