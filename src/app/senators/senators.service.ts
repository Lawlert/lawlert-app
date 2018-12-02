import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Senator } from './senator.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SenatorsService {
  private senators: Senator[] = [];
  private senatorsUpdated = new Subject<Senator[]>();

  constructor(private http: HttpClient) { }

  getSenators() {
    this.http.get<{message: string, senators: Senator[]}>('http://localhost:3000/api/senators')
      .subscribe((senatorData) => {
        this.senators =  senatorData.senators;
        this.senatorsUpdated.next([...this.senators]);
    });
  }

  getSenatorsUpdateListener() {
    return this.senatorsUpdated.asObservable();
  }

}
