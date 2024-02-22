import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  playersTab: any = [];
  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe((response) => {
      this.playersTab = response.data;
      console.log("this is the msg from the BE :" + " ", response.message);

    });
  }
  display(id) {
    this.router.navigate([`playerInfo/${id}`]);
  }
  edit(id) {
    this.router.navigate([`editPlayer/${id}`]);
  }
  delete(idP) {
    this.playerService.deletePlayer(idP).subscribe((response) => {
      alert(response.message);
      this.playerService.getAllPlayers().subscribe((response) => {
        this.playersTab = response.data;
      });
    });

  }
}
