import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-fundriser',
  templateUrl: './update-fundriser.component.html',
  styleUrls: ['./update-fundriser.component.css']
})
export class UpdateFundriserComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router, private paramsRoute: ActivatedRoute){}


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

paramId: string = '';

  ngOnInit(): void {
    const param :any = this.paramsRoute.snapshot.paramMap;
    this.paramId = param.params['id'];


    this.fetchFundriserDetails();
  }

  // fetch videos

  fetchFundriserDetails = async() =>{

    this.http.get<any>(`http://localhost:6001/fetch-fundriser/${this.paramId}`).subscribe(
      async (response)=>{

        this.fundriserPurpose = response.fundriserPurpose;
        this.applicantName = response.applicantName;
        this.applicantEmail = response.applicantEmail;
        this.applicantMobile = response.applicantMobile;
        this.title = response.title;
        this.description = response.description;
        this.bannerImage = response.bannerImage;
        this.deadline = response.deadline;
        this.targetAmount = response.targetAmount;
        this.extraImg1 = response.extraImg1;
        this.extraImg2 = response.extraImg2;
        this.extraImg3 = response.extraImg3;

      } 
    )
  }



  handleUpdateFundriser(){

    this.http.post<any>('http://localhost:6001/update-fundriser', {fundriserId: this.paramId, applicantId: this.userId, applicantName: this.applicantName, applicantEmail: this.applicantEmail , applicantMobile: this.applicantMobile, fundriserPurpose: this.fundriserPurpose, title: this.title, description: this.description, bannerImage: this.bannerImage, deadline:this.deadline, targetAmount:this.targetAmount, extraImg1:this.extraImg1, extraImg2:this.extraImg2, extraImg3:this.extraImg3, collectedAmount: 0}).subscribe(
      (response)=>{

        alert("Fundriser updated!!");


        this.route.navigate(['/']);

      }, (error)=>{
        alert("Update failed!!");
      }
    )
    }

}
