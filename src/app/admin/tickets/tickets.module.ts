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
import { TicketGeneratorCpComponent } from './ticket-generator-cp/ticket-generator-cp.component';
import { TicketGeneratorComponent } from './ticket-generator/ticket-generator.component';
import { TicketLuzDelSurComponent } from './ticket-luz-del-sur/ticket-luz-del-sur.component';

export const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'luz-del-sur' },
    { path: 'luz-del-sur', component: TicketLuzDelSurComponent },
    { path: 'bbva', component: TicketBbvaComponent },
    { path: 'bcp', component: TicketBcpComponent },
    { path: 'interbank', component: TicketIbkComponent },
    { path: 'scotiabank', component: TicketScotiaComponent },
    { path: 'luz-del-sur-datos', component: TicketGeneratorComponent },
    { path: 'cell-power', component: TicketGeneratorCpComponent }
];


@NgModule({
    declarations: [
        TicketBbvaComponent,
        TicketBcpComponent,
        TicketGeneratorComponent,
        TicketGeneratorCpComponent,
        TicketLuzDelSurComponent,
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
