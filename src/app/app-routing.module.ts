import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TicketGeneratorComponent } from './pages/ticket-generator/ticket-generator.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'generador-ticket', component: TicketGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
