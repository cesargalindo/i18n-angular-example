import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
