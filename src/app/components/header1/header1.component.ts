import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {
  isLoggedIn: boolean = false;
  name: string;
  
  constructor(private router: Router) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.name = localStorage.getItem('name');

    if (token) {
      const decoded = jwtDecode(token);
      if (decoded) {
        this.isLoggedIn = true;
      }
    }
  }

 

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('connectedUser');
    localStorage.removeItem('name');
    this.isLoggedIn = false; 
    window.location.href = "";
  }
 

}
