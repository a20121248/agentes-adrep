import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

export const routes = [
    { path: '', component: DashboardComponent, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        DashboardComponent
    ],
  imports: [
      CommonModule,
      FlexLayoutModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes)
    ]
})
export class DashboardModule {
    constructor() {
        console.log("In module");
    }
}
