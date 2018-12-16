import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillsService } from './bills.service';
import { Bill } from './bill.model';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit, OnDestroy {
  bills: Bill[] = [];
  private senatorsSub: Subscription;

  constructor( public billsService: BillsService, public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.billsService.getSenators();
    this.senatorsSub = this.billsService.getSenatorsUpdateListener()
      .subscribe((bills: Bill[]) => {
        this.bills = bills;
      });
  }

  ngOnDestroy() {
    this.senatorsSub.unsubscribe();
  }

  onFollowClick(bill: Bill) {
    this.snackBar.open('You\'ve followed Bill #:' + bill.number + '!');
  }
}
