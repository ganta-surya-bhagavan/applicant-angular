import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleComponent } from './schedule/schedule.component';
import { StatusComponent } from './status/status.component';
import { CoursesComponent } from './courses/courses.component';
import { ApplyCourseComponent } from './apply-course/apply-course.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'courses'},
  {path: 'courses', component: CoursesComponent },
  {path: 'schedules', component: ScheduleComponent },
  {path: 'applyCourse', component: ApplyCourseComponent },
  {path: 'status', component: StatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
