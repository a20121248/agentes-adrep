import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminComponent } from './admin/admin.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './site/home/home.component';
import { ContactComponent } from './site/contact/contact.component';
import { SiteComponent } from './site/site.component';
import { LoginComponent } from './login/login.component';
import { SiteNavbarComponent } from './site/components/site-navbar/site-navbar.component';
import { SiteFooterComponent } from './site/components/site-footer/site-footer.component';
import { MenuListItemComponent } from './admin/components/menu-list-item/menu-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AdminComponent,
    ToolbarComponent,
    HomeComponent,
    ContactComponent,
    SiteComponent,
    LoginComponent,
    SiteNavbarComponent,
    SiteFooterComponent,
    MenuListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatTableModule,
    MatToolbarModule,
    MatStepperModule,
    MatBadgeModule,
    MatRadioModule,
    MatDialogModule,
    MatMenuModule,
    MatProgressBarModule,
    MatDatepickerModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
