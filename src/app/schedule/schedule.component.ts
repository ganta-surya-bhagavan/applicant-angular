import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  targetCourse:number;
  details:any[];
  constructor(private router: ActivatedRoute,private httpClient: HttpClient) {
    if(this.router.snapshot.queryParamMap.has('id')){
      this.targetCourse = parseInt(this.router.snapshot.queryParamMap.get('id'));
    }
  }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8080/schedules').subscribe((data: any): void => {
      this.details = data;
    });
  }
}
