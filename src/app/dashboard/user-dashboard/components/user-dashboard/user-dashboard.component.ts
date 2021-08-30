import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  userDetails: any = JSON.parse(localStorage.getItem('userDetails') || '{}');
  constructor(private profileService: ProfileService) {}
  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      (res) => {},
      (err) => {
        console.log(JSON.stringify(err.data));
      }
    );
    console.log(this.userDetails.name);
  }
}
