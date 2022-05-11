import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DashBoardServiceService } from '../dash-board-service.service';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent,
  ],

  providers: [DashBoardServiceService],
})
export class AdminModule {}
