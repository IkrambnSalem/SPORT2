import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ScoreComponent } from './components/score/score.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { NextMatchComponent } from './components/next-match/next-match.component';
import { TeamComponent } from './components/team/team.component';
import { VideosComponent } from './components/videos/videos.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { ArticleComponent } from './components/article/article.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { JwtInterceptorServiceService } from './services/jwt-interceptor-service.service';
import { ProfileComponent } from './components/profile/profile.component';
import { TeamPlayersComponent } from './components/team-players/team-players.component';
import { AllteamsComponent } from './components/allteams/allteams.component';
import { Team1Component } from './components/team1/team1.component';
import { SearchComponent } from './components/search/search.component';
import { Header1Component } from './components/header1/header1.component';
import { SearchWeatherComponent } from './components/search-weather/search-weather.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ScoreComponent,
    BlogsComponent,
    NextMatchComponent,
    TeamComponent,
    VideosComponent,
    OurBlogComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddTeamComponent,
    SignupComponent,
    LoginComponent,
    MatchesComponent,
    PlayerComponent,
    PlayersComponent,
    AdminComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    ArticleComponent,
    BannerComponent,
    MatchInfoComponent,
    AsterixPipe,
    EditMatchComponent,
    FilterPipe,
    PlayerInfoComponent,
    EditPlayerComponent,
    TeamInfoComponent,
    EditTeamComponent,
    ProfileComponent,
    TeamPlayersComponent,
    AllteamsComponent,
    Team1Component,
    SearchComponent,
    Header1Component,
    SearchWeatherComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorServiceService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
