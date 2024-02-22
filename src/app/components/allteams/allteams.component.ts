import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-allteams',
  templateUrl: './allteams.component.html',
  styleUrls: ['./allteams.component.css']
})
export class AllteamsComponent implements OnInit {
  teams: any = [];
  constructor(private teamService: TeamService , private router:Router) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe((response)=>{
      this.teams = response.data;
    });

  }
  showTeam(id){
  this.router.navigate([`teamPlayers/${id}`]);
  }
}
