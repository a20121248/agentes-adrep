import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RechargesComponent } from './recharges/recharges.component';

export const routes = [
    //{ path: '', pathMatch: 'full', redirectTo: 'familia' },
    { path: ':company', component: RechargesComponent }
];


@NgModule({
    declarations: [
        RechargesComponent
    ],
  imports: [
      CommonModule,
      FlexLayoutModule,
      MatIconModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatTableModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forChild(routes)
  ]
})
export class RechargesModule { }
