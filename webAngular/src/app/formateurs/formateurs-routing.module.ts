import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormateursComponent } from './formateurs/formateurs.component';

const routes: Routes = [
    {
        path: '', component: FormateursComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormateursRoutingModule { }
