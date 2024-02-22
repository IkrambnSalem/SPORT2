import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teamsTab: any = [];
  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe((response) => {
      this.teamsTab = response.data;

    })
  }
  display(id) {
    this.router.navigate([`teamInfo/${id}`]);
  }
  edit(id) {
    this.router.navigate([`editTeam/${id}`]);
  }
  delete(id) { }
}
