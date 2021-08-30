import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/services/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private authService: AuthService, private router: Router) {}
  errorsLogin: any = {};
  decode: any = {};
  ngOnInit(): void {}
  loginSubmit() {
    this.authService.loginUser(this.email, this.password).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.decode = jwt_decode(res.token);
        localStorage.setItem('userDetails', JSON.stringify(this.decode));
        console.log(this.decode);
        this.router.navigate(['/dashboard/user']);
      },
      (err) => {
        this.errorsLogin = err.error;
        console.log(this.errorsLogin);
      }
    );
  }
}
