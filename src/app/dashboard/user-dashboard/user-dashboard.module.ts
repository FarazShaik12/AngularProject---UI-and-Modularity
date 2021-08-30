import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { DashboardActionComponent } from './dashboard-action/dashboard-action.component';
import { EduDetailsComponent } from './display/edu-details/edu-details.component';
import { ExpDetailsComponent } from './display/exp-details/exp-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from 'src/app/profile/services/profile.service';

@NgModule({
  declarations: [
    UserDashboardComponent,
    DashboardActionComponent,
    EduDetailsComponent,
    ExpDetailsComponent,
  ],
  imports: [CommonModule, HttpClientModule, UserDashboardRoutingModule],
  providers: [ProfileService],
})
export class UserDashboardModule {}
