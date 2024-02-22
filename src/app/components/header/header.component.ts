import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  connectedUser: any;
  isLoggedIn: boolean = false;
  name: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkAuthentication();
  }

  checkAuthentication(): void {
    const token = localStorage.getItem('token');
    this.name = localStorage.getItem('name');

    if (token) {
      const decoded = jwtDecode(token);
      if (decoded) {
        this.connectedUser = decoded;
        this.isLoggedIn = true;
      }
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('connectedUser');
    localStorage.removeItem('name');
    this.isLoggedIn = false; 
    this.router.navigate(['/']);
  }
}