import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerForm: FormGroup;
  player: any = {}
  teams: any = [];
  teamId:any;
  constructor(private playerService: PlayerService, private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe((result) => {
      console.log(result);

      this.teams = result.data;
    })
  }
  addPlayer() {
    console.log("player object", this.player);
    this.player.TeamId=this.teamId;
    console.log("the id of Team",this.player.TeamId);
    
    this.playerService.addPlayer(this.player).subscribe((response) => {
      console.log("here the response from the BE" + "", response.message);

    })
  }
  selectteamId(event) {
    console.log("here event",event.target.value);
    console.log("here id from name ",event.target.value);
    this.teamId=event.target.value;

  }
}
