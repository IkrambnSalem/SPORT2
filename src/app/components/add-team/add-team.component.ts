import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  teamForm:FormGroup;
  team:any={}
  constructor(private teamServcie:TeamService) { }

  ngOnInit() {
  }
  addTeam(){
    console.log("team object",this.team);
    this.teamServcie.addTeam(this.team).subscribe((response)=>{
     console.log("here the response from the BE"+"",response.message);
     
    })
  }
}
