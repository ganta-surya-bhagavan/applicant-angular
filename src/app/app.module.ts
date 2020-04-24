import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StatusComponent } from './status/status.component';
import { CoursesComponent } from './courses/courses.component';
import { ApplyCourseComponent } from './apply-course/apply-course.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    StatusComponent,
    CoursesComponent,
    ApplyCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
