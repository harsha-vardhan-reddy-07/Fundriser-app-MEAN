import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-fundriser',
  templateUrl: './new-fundriser.component.html',
  styleUrls: ['./new-fundriser.component.css']
})
export class NewFundriserComponent {

  constructor(private http: HttpClient, private route: Router){}


  userId = localStorage.getItem('userId');

  newFundCard: number = 1;

  fundriserPurpose: string = '';
  applicantName: string = '';
  applicantEmail: string = '';
  applicantMobile: string = '';
  title: string = '';
  description: string = '';
  bannerImage: string = '';
  deadline: string = '';
  targetAmount: number = 0;
  extraImg1: string = '';
  extraImg2: string = '';
  extraImg3: string = '';


  handleNewFundriser(){

    this.http.post<any>('http://localhost:6001/new-fundriser', {applicantId: this.userId, applicantName: this.applicantName, applicantEmail: this.applicantEmail , applicantMobile: this.applicantMobile, fundriserPurpose: this.fundriserPurpose, title: this.title, description: this.description, bannerImage: this.bannerImage, deadline:this.deadline, targetAmount:this.targetAmount, extraImg1:this.extraImg1, extraImg2:this.extraImg2, extraImg3:this.extraImg3, collectedAmount: 0}).subscribe(
      (response)=>{

        alert("Fundriser started!!");

        this.fundriserPurpose = '';
        this.applicantName = '';
        this.applicantEmail = '';
        this.applicantMobile = '';
        this.title = '';
        this.description = '';
        this.bannerImage = '';
        this.deadline = '';
        this.targetAmount = 0;
        this.extraImg1 = '';
        this.extraImg2 = '';
        this.extraImg3 = '';

        this.route.navigate(['/']);

      }, (error)=>{
        alert("Registration failed!!");
      }
    )
    }
  }
