import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component'
import { SessionsComponent } from './sessions/sessions/sessions.component'
import { FormateursComponent } from './formateurs/formateurs/formateurs.component'
import { ParticipantsComponent } from './participants/participants/participants.component'

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sessions', component: SessionsComponent },
  { path: 'formateurs', component: FormateursComponent },
  { path: 'participants', component: ParticipantsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
