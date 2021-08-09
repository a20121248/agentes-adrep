import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TicketBbvaComponent } from './ticket-bbva/ticket-bbva.component';
import { TicketBcpComponent } from './ticket-bcp/ticket-bcp.component';
import { TicketIbkComponent } from './ticket-ibk/ticket-ibk.component';
import { TicketScotiaComponent } from './ticket-scotia/ticket-scotia.component';
import { TicketLuzDelSurCellPowerComponent } from './ticket-luz-del-sur-cell-power/ticket-luz-del-sur-cell-power.component';
import { TicketLuzDelSurPasarelaComponent } from './ticket-luz-del-sur-pasarela/ticket-luz-del-sur-pasarela.component';
import { TicketLuzDelSurManualComponent } from './ticket-luz-del-sur-manual/ticket-luz-del-sur-manual.component';


export const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'luz-del-sur-cell-power' },
    { path: 'luz-del-sur-cell-power', component: TicketLuzDelSurCellPowerComponent },
    { path: 'luz-del-sur-pasarela', component: TicketLuzDelSurPasarelaComponent },
    { path: 'luz-del-sur-manual', component: TicketLuzDelSurManualComponent },
    { path: 'bbva', component: TicketBbvaComponent },
    { path: 'bcp', component: TicketBcpComponent },
    { path: 'interbank', component: TicketIbkComponent },
    { path: 'scotiabank', component: TicketScotiaComponent }
];


@NgModule({
    declarations: [
        TicketBbvaComponent,
        TicketBcpComponent,
        TicketLuzDelSurCellPowerComponent,
        TicketLuzDelSurPasarelaComponent,
        TicketLuzDelSurManualComponent,
        TicketIbkComponent,
        TicketScotiaComponent
    ],
  imports: [
      CommonModule,
      FlexLayoutModule,
      MatIconModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forChild(routes)
  ]
})
export class TicketsModule { }
