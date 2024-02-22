import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team1',
  templateUrl: './team1.component.html',
  styleUrls: ['./team1.component.css']
})
export class Team1Component implements OnInit {
  @Input() team1:any={};
  constructor() { }

  ngOnInit() {
  }

}
