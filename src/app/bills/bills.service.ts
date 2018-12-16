import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Bill } from './bill.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsService {
  private bills: Bill[] = [];
  private billsUpdated = new Subject<Bill[]>();

  constructor(private http: HttpClient) { }

  getSenators() {
    this.http.get<{message: string, bills: Bill[]}>('http://localhost:3000/api/bills')
      .subscribe((billData) => {
        this.bills =  billData.bills;
        this.billsUpdated.next([...this.bills]);
    });
  }

  getSenatorsUpdateListener() {
    return this.billsUpdated.asObservable();
  }

}
