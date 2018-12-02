import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatExpansionModule, MatAccordion } from '@angular/material/expansion';
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
  constructor( public senatorsService: SenatorsService) {}

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
}
