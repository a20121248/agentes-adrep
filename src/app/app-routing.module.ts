import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './site/home/home.component';
import { ContactComponent } from './site/contact/contact.component';
import { SiteComponent } from './site/site.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    component: SiteComponent,
    children : [
      { path: 'inicio', component: HomeComponent },
      { path: 'contactanos', component: ContactComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children : [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', loadChildren: () => import('./admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'depositos', loadChildren: () => import('./admin/deposits/deposits.module').then(m => m.DepositsModule) },
      { path: 'tickets', loadChildren: () => import('./admin/tickets/tickets.module').then(m => m.TicketsModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
