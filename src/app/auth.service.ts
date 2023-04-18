import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor() { }

  login(username: string, password: string) {
    if (username === 'admin' && password === 'pass') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
