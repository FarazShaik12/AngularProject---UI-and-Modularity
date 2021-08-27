import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/user/model/register';
import { AuthService } from 'src/app/user/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register = {
    name: '',
    email: '',
    password: '',
    password2: '',
  };
  errors: any = {};
  constructor(private authService: AuthService) {}
  registerSubmit() {
    console.log(JSON.stringify(this.register));
    //this.register contains the user data
    this.authService.createUser(this.register).subscribe(
      (res) => console.log(JSON.stringify(res)),
      (err) => {
        console.log(JSON.stringify(err.error));
        this.errors = err.error;
      }
    );
  }

  ngOnInit(): void {}
}
