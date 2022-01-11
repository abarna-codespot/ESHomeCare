import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { CalendarComponent } from './calendar/calendar.component';
import { ClientListComponent } from './client-list/client-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewClientComponent } from './new-client/new-client.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { StartUpComponent } from './start-up/start-up.component';

const routes: Routes = [
  { path: 'home', component: StartUpComponent, canActivate:[AuthGuardService]},
  { path: 'calendar', component: CalendarComponent },
  { path: 'create-client', component: NewClientComponent },
  { path: 'create-employee', component: NewEmployeeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'client-list', component: ClientListComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: '', component: LoginPageComponent },
  { path: '**', component: LoginPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
