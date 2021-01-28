import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component'
import { FormateursRoutingModule } from './formateurs/formateurs-routing.module';
import { FormateursComponent } from './formateurs/formateurs/formateurs.component'
import { ParticipantsComponent } from './participants/participants/participants.component'
import { SessionsRoutingModule } from './sessions/sessions-routing.module';
import { SessionsModule } from './sessions/sessions.module';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'sessions',
    loadChildren: () => SessionsRoutingModule
  },
  { path: 'formateurs', loadChildren: () => FormateursRoutingModule },
  { path: 'participants', component: ParticipantsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
