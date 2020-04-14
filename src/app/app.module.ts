import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RelationshipModule } from './home/relationship/relationship.module';
import { FamilyModule } from './home/family/family.module';
import { CareerModule }  from './home/career/career.module';
import { MenuService } from '../services/menu.service';
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from './menu/menu.module';
import { HomePage } from './home/home.page';
import { AdolescentModule } from './home/adolescent/adolescent.module';
import { IndividualModule } from './home/individual/indivudal.module'
import { TeamComponent } from './team/team.component';
import { SchoolComponent } from './school/school.component';
import { OutreachComponent } from './outreach/outreach.component';
import { FeesComponent } from './fees/fees.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FormsComponent } from './forms/forms.component';
import { ApptModalComponent } from './appt-modal/appt-modal.component';
import { AppointmentService } from 'src/services/appointment.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { LoginService } from '../services/login.service';

import { AmplifyAngularModule, AmplifyIonicModule, AmplifyService } from 'aws-amplify-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { RegisterComponent } from './register/register.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotUsernameComponent } from './forgot-username/forgot-username.component';
import { FormService } from 'src/services/form.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePage,
    TeamComponent,
    SchoolComponent,
    OutreachComponent,
    FeesComponent,
    AppointmentComponent,
    FormsComponent,
    ApptModalComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    CalendarComponent,
    ForgotPasswordComponent,
    ForgotUsernameComponent
  ],
  entryComponents: [
    ApptModalComponent,
    ForgotPasswordComponent,
    ForgotUsernameComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RelationshipModule,
    FamilyModule,
    CareerModule,
    AdolescentModule,
    IndividualModule,
    HttpClientModule,
    AmplifyAngularModule,
    AmplifyIonicModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MenuService,
    AppointmentService,
    AmplifyService,
    AuthGuardService,
    LoginService,
    AuthService,
    FormService,
    // File,
    // FileTransfer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
