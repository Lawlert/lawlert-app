import { Component, OnInit } from '@angular/core';
import { BillsService } from './bills.service';
import { Bill } from './bills.model';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  bills: Bill[] = [];

  constructor( public billsService: BillsService) {}

  ngOnInit() {
  }

}
