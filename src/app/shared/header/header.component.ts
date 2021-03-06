import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  public get showSignUp(): boolean {
    if (this.router.url === '/login') {
      return true;
    }
    return false;
  }

  public get showLogin(): boolean {
    if (this.router.url === '/sign-up') {
      return true;
    }
    return false;
  }

  public get showLogOut(): boolean {
    const user = localStorage.getItem('userKey');
    if (user !== null && user !== undefined) {
      return true;
    }
    return false;
  }

  public get showHome(): boolean {
    if (this.router.url === '/home') {
      return false;
    }
    return true;
  }

  public get showSubmiteReview(): boolean {
    if (this.router.url === '/submitReview') {
      return false;
    }
    return true;
  }

  public logOut(): void {
    localStorage.removeItem('userKey');
    localStorage.removeItem('userEmail');
    this.router.navigate(['login']);
  }

  public myProfile(): void {
    this.router.navigate(['myProfile']);
  }

  public submitReview(): void {
    this.router.navigate(['submitReview']);
  }

  public goToHome(): void {
    this.router.navigate(['home']);
  }

  ngOnInit(): void {
  }

}
