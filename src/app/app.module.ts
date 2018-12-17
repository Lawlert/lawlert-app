import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatIconModule, MatSidenavModule, MatListModule
 } from '@angular/material';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SenatorsComponent } from './senators/senator-list/senators.component';
import { BillsComponent } from './bills/bills.component';
import { MainNavComponent } from './main-nav/main-nav.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './app.routing';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [AppComponent, NavbarComponent, SenatorsComponent, MainNavComponent, BillsComponent],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    RoutingModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
