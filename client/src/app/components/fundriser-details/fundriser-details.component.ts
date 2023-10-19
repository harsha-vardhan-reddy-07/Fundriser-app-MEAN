import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fundriser-details',
  templateUrl: './fundriser-details.component.html',
  styleUrls: ['./fundriser-details.component.css']
})
export class FundriserDetailsComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router, private paramsRoute: ActivatedRoute){}

  fundriser: any = null;

  paramId: string = '';

  fundriserPurpose: string = '';


  ngOnInit(): void {

    const param :any = this.paramsRoute.snapshot.paramMap;
    this.paramId = param.params['id'];
      
    this.fetchFundriserDetails();
    this.fetchDonations();
  }

 fetchFundriserDetails(){

    this.http.get<any>(`http://localhost:6001/fetch-fundriser/${this.paramId}`).subscribe(
      async (response)=>{

        this.fundriser = await response;
        this.fundriserPurpose = response.fundriserPurpose;
      } 
    )
  }


  donations: any[] = [];

  fetchDonations(){
    this.http.get<any>(`http://localhost:6001/fetch-donations`).subscribe(
      (response)=>{
        this.donations = response.filter((donation: any)=> donation.fundriserId === this.paramId).reverse();
      }
    )
  }



  userId = localStorage.getItem('userId');
  username = localStorage.getItem('username');
  email = localStorage.getItem('email');


  donationAmount: number = 0;
  remark: string = '';

  handleDonation(){
    this.http.post<any>(`http://localhost:6001/make-donation`, {donarId: this.userId, donarName: this.username, donarEmail: this.email, donationAmount: this.donationAmount, remark:this.remark, fundriserId: this.paramId, fundriserPurpose: this.fundriserPurpose}).subscribe(
        (response)=>{
          alert('donation successful')
          this.donationAmount = 0;
          this.remark = "";
          
          this.fetchFundriserDetails();
          this.fetchDonations();

        }
      )
  }


  async shareURL(){
    try {
      await navigator.share({
        title: 'Share this fundriser',
        text: 'Contribute to the nobel cause',
        url: window.location.href, // Replace with your actual URL
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };


  calculateProgressWidth(collectedAmount: number, targetAmount: number): number {
    const percentage = (collectedAmount / targetAmount) * 100;
    return percentage;
  }

}
