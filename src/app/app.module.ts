import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatIconModule
 } from '@angular/material';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SenatorsComponent } from './senators/senator-list/senators.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './app.routing';
import { BillsComponent } from './bills/bills.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, SenatorsComponent, BillsComponent],
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
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
