import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchUrl: string = "http://localhost:3000/matches";
  constructor(private httpClient: HttpClient) { }
  addMatch(obj) {
    console.log("here the object from the FE", obj);

    return this.httpClient.post<{ message: string }>(this.matchUrl, obj);
  }

  getAllMatches() {
    return this.httpClient.get<{ matches: any, message: string }>(this.matchUrl);
  }
  getMatchById(id) {
    return this.httpClient.get<{ data: any }>(`${this.matchUrl}/${id}`);
  }
  updateMatch(newObj) {
    console.log(newObj);

    return this.httpClient.put<{ message: string }>(this.matchUrl, newObj);

  }
  deleteMatch(id) {
    return this.httpClient.delete<{ message: string }>(`${this.matchUrl}/${id}`);
  }
  // Service Angular
  searchMatch(teamOne: string) {
    return this.httpClient.get<{ match: any }>(`${this.matchUrl}/search/${teamOne}`);
  }

}
