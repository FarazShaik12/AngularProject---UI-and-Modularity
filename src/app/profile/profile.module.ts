import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
@NgModule({
  declarations: [],
  imports: [CommonModule, ProfileRoutingModule, HttpClientModule],
  providers: [ProfileService],
})
export class ProfileModule {}
