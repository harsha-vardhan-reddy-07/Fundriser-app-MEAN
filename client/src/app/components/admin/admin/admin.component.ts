import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  usersCount: number = 0;
  donationsCount: number = 0;
  totalDonations: number = 0;
  fundrisersCount: number = 0;

  constructor(private http: HttpClient, private route: Router){}

  ngOnInit(): void {
    this.fetchFundrisers();
    this.fetchUsers();
    this.fetchDonations();
}

  fetchFundrisers(){
    this.http.get<any>('http://localhost:6001/fetch-fundrisers').subscribe(
      (response)=>{
        this.fundrisersCount = response.length;
      }
    )
  }

  fetchUsers(){
    this.http.get<any>('http://localhost:6001/fetch-users').subscribe(
      (response)=>{
        this.usersCount = response.length;
      }
    )
  }

  fetchDonations(){
    this.http.get<any>('http://localhost:6001/fetch-donations').subscribe(
      (response)=>{
        this.donationsCount = response.length;
        this.totalDonations = response.reduce((sum: any, obj: any) => sum + obj.donationAmount, 0);
      }
    )
  }


}
