import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { SessionsComponent } from './sessions/sessions.component';

const routes: Routes = [
    {
        path: '', component: SessionsComponent, children: [
            { path: 'list', component: SessionsListComponent }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SessionsRoutingModule { }
