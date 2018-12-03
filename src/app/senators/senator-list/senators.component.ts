import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatExpansionModule, MatAccordion, MatSnackBar } from '@angular/material';
import { SenatorsService } from '../senators.service';
import { Senator } from '../senator.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-senators',
  templateUrl: './senators.component.html',
  styleUrls: ['./senators.component.css']
})
export class SenatorsComponent implements OnInit, OnDestroy {
  senators: Senator[] = [];
  private senatorsSub: Subscription;
  constructor( public senatorsService: SenatorsService, public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.senatorsService.getSenators();
    this.senatorsSub = this.senatorsService.getSenatorsUpdateListener()
      .subscribe((senators: Senator[]) => {
        this.senators = senators;
      });
  }

  ngOnDestroy() {
    this.senatorsSub.unsubscribe();
  }

  onFollowClick(senator: Senator) {
    this.snackBar.open('You\'ve followed ' + senator.short_title + ' ' + senator.first_name + ' ' + senator.last_name + '!');
  }
}
