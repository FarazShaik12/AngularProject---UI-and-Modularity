import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private authService: AuthService) {}
  errorsLogin: any = {};
  ngOnInit(): void {}
  loginSubmit() {
    this.authService.loginUser(this.email, this.password).subscribe(
      (res) => console.log(res),
      (err) => {
        this.errorsLogin = err.error;
        console.log(this.errorsLogin);
      }
    );
  }
}
