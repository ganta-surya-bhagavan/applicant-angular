import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  applicants:any[];
  applicationId:number;
  statusResult:string="";
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8080/status').subscribe((data: any): void => {
      this.applicants = data;
    });
  }

  checkStatus(){
    var applicationId = this.applicationId;
    var statusResult = "";
    this.applicants.forEach(function(value){
      if(value.applicationId == applicationId){
        statusResult = applicationId+" is "+value.status;
      }
    });
    this.statusResult = statusResult;
    if(this.statusResult == ""){
      this.statusResult = this.applicationId+" does not exists";
    }
  }
}
