import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { AdminComponent } from './components/admin/admin.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AllteamsComponent } from './components/allteams/allteams.component';
import { TeamPlayersComponent } from './components/team-players/team-players.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchWeatherComponent } from './components/search-weather/search-weather.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"addMatch",component:AddMatchComponent},
  {path:"addPlayer",component:AddPlayerComponent},
  {path:"addTeam",component:AddTeamComponent},
  {path:"subscription",component:SignupComponent},
  {path:"signupAdmin",component:SignupComponent},
  {path:"signin",component:LoginComponent},
  {path:"allMatches",component:MatchesComponent},
  {path:"allPlayers",component:PlayersComponent},
  {path:"admin",component:AdminComponent},
  {path:"blogs",component:OurBlogComponent},
  {path:"matchInfo/:id",component:MatchInfoComponent},
  {path:"editMatch/:id",component:EditMatchComponent},
  {path:"playerInfo/:id",component:PlayerInfoComponent},
  {path:"editPlayer/:id",component:EditPlayerComponent},
  {path:"teamInfo/:id",component:TeamInfoComponent},
  {path:"editTeam/:id",component:EditTeamComponent},
  {path:"profile",component:ProfileComponent},
  {path:"allTeams",component:AllteamsComponent},
  {path:"teamPlayers/:id",component:TeamPlayersComponent},
  {path:"search",component:SearchComponent},
  {path:"search-weather",component:SearchWeatherComponent},

 


  












 

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]

})
export class AppRoutingModule { }
//