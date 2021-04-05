import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TicketGeneratorCpComponent } from './pages/ticket-generator-cp/ticket-generator-cp.component';
import { TicketGeneratorComponent } from './pages/ticket-generator/ticket-generator.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'generador-ticket', component: TicketGeneratorComponent },
  { path: 'generador-ticket-cp', component: TicketGeneratorCpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
