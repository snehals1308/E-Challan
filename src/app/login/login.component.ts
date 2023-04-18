
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!: string;
  password!: string;
  invalidLogin = false;
  // authSerice: any;

  constructor(private router: Router, private auth: AuthService) { }

  login(): void  {
    if (this.auth.login(this.username, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.invalidLogin = true;
    }
    // if (this.username==="admin" && this.password==='pass') {
    //   this.router.navigate(['/dashboard']);
    // }
    // else {
    //   this.invalidLogin = true;
    //   alert("Invalid password or username please re-enter your password")
    // }
    // return 0;
  }

}
