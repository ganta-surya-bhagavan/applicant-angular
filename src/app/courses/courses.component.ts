import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  courses:any[];
  ngOnInit(): void {
    this.httpClient.get('http://localhost:8080/courses').subscribe((data: any): void => {
      this.courses = data;
    });
  }
}
