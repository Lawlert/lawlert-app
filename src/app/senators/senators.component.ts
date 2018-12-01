import { Component, OnInit } from '@angular/core';
import { MatExpansionModule, MatAccordion } from '@angular/material/expansion';
import { SenatorsService } from './senators.service';

@Component({
  selector: 'app-senators',
  templateUrl: './senators.component.html',
  styleUrls: ['./senators.component.css']
})
export class SenatorsComponent implements OnInit {
  senators = [];
  constructor( public senatorsService: SenatorsService) {}

  ngOnInit() {
    this.senators = this.senatorsService.getSenators();
  }
}
