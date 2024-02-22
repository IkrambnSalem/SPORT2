import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matches: any = [];
  constructor(private router: Router, private matcheService: MatchService) { }

  ngOnInit() {
    this.matcheService.getAllMatches().subscribe((response) => {
      this.matches=response.matches;
      console.log(response.message);
    })
  }

  display(x: number) {
    this.router.navigate([`matchInfo/${x}`]);
  }

  edit(x: number) {
    this.router.navigate([`editMatch/${x}`]);
  }
  delete(x: number) {
    // for (let i = 0; i < this.matches.length; i++) {
    //   if (this.matches[i].id == x) {
    //     this.matches.splice(i, 1);
    //     break;
    //   }
    // }
    // localStorage.setItem("matches", JSON.stringify(this.matches));
   this.matcheService.deleteMatch(x).subscribe((response)=>{
    alert(response.message);
    this.matcheService.getAllMatches().subscribe((response) => {
      this.matches=response.matches;
      console.log(response.message);
     
    })
   });
  }
}
