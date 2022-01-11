import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartUpComponent } from './start-up/start-up.component';
import { NavComponent } from './nav/nav.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewClientComponent } from './new-client/new-client.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ClientListComponent } from './client-list/client-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    StartUpComponent,
    NavComponent,
    CalendarComponent,
    LoginPageComponent,
    NewClientComponent,
    NewEmployeeComponent,
    ClientListComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
