import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'de',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'fr',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'ja',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'en-US',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
