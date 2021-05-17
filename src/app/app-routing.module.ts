import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TicketGeneratorCpComponent } from './pages/ticket-generator-cp/ticket-generator-cp.component';
import { TicketGeneratorComponent } from './pages/ticket-generator/ticket-generator.component';
import { TicketBcpComponent } from './pages/ticket-bcp/ticket-bcp.component';
import { TicketBbvaComponent } from './pages/ticket-bbva/ticket-bbva.component';
import { TicketIbkComponent } from './pages/ticket-ibk/ticket-ibk.component';
import { TicketScotiaComponent } from './pages/ticket-scotia/ticket-scotia.component';

const routes: Routes = [
  { path: 'ticket-bcp', component: TicketBcpComponent },
  { path: 'ticket-bbva', component: TicketBbvaComponent },
  { path: 'ticket-ibk', component: TicketIbkComponent },
  { path: 'ticket-scotia', component: TicketScotiaComponent },
  { path: 'ticket-luz-del-sur', component: TicketGeneratorComponent },
  { path: 'ticket-cell-power', component: TicketGeneratorCpComponent },
  { path: '**', redirectTo: 'ticket-ibk'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
