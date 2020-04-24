import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Applicant } from '../applicant';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apply-course',
  templateUrl: './apply-course.component.html',
  styleUrls: ['./apply-course.component.css']
})
export class ApplyCourseComponent implements OnInit {
  localUrl="http://localhost:8080/applicant";
  addedApplicant:Applicant;
  targetCourse:number;
  courses:any[];
  applicantName:string="";
  applicantDOB:string="";
  highestQualification:string="";
  marks:string="";
  goals:string="";
  email:string="";
  errorMsg:string="";
  successMsg:string="";
  addedApplicantId:number;
  constructor(private router: ActivatedRoute,private httpClient: HttpClient) {
    if(this.router.snapshot.queryParamMap.has('id')){
      this.targetCourse = parseInt(this.router.snapshot.queryParamMap.get('id'));
    }
  }
  

  ngOnInit(): void {
    this.httpClient.get("assets/project.json").subscribe((data: any): void => {
      this.courses = data.programsOffered;
    });
  }
  
    fullName =new FormControl('enter your name',Validators.pattern("^[A-Z][A-Za-z' ']+$"));
    qualification = new FormControl(Validators.required);
    marksObtained = new FormControl(Validators.min(40),Validators.max(100));
    emailId = new FormControl(Validators.pattern("^[A-Za-z0-9+_.-]+@(.+)$"));
  apply(){
    const applicant = new Applicant();
    applicant.dateOfBirth=this.applicantDOB;
    applicant.fullName=this.fullName.value;
    applicant.highestQualification=this.qualification.value;
    applicant.emailId=this.emailId.value;
    applicant.marksObtained=this.marksObtained.value;
    applicant.scheduledProgramId=this.targetCourse;
    applicant.dateOfInterview="not yet scheduled";
    applicant.status="waiting";
    applicant.goals=this.goals;
    this.errorMsg = "";
    this.successMsg = "";
    /*if(this.applicantName=="" || this.applicantDOB=="" || this.highestQualification=="" || this.marks=="" || this.goals=="" || this.email==""){
      this.errorMsg = "All the fields are Mandatory";
    }
    else{*/
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
       this.httpClient.post<Applicant>(this.localUrl, applicant, httpOptions).subscribe(
         data=>{
           this.addedApplicant=data;
           this.afterApply(this.addedApplicant);
         }
       );
      /*console.log(this.addedApplicant);
      this.successMsg = "Application Submitted with applicationId"+this.addedApplicantId;
      this.applicantName="";
      this.applicantDOB="";
      this.highestQualification="";
      this.marks="";
      this.goals="";
      this.email="";*/
    
  }
  afterApply(applicant:Applicant){
    console.log(this.addedApplicant);
      this.successMsg = "Application Submitted with applicationId"+applicant.applicationId;
      this.applicantName="";
      this.applicantDOB="";
      this.highestQualification="";
      this.marks="";
      this.goals="";
      this.email="";
  }
}
