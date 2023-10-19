import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-fundrisers',
  templateUrl: './my-fundrisers.component.html',
  styleUrls: ['./my-fundrisers.component.css']
})
export class MyFundrisersComponent {

  fundrisers: any[] = [];

  userId = localStorage.getItem('userId');

  constructor(private http: HttpClient, private route: Router){}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');

      this.fetchFundrisers();
    
}

  fetchFundrisers(){
    this.http.get<any>('http://localhost:6001/fetch-fundrisers').subscribe(
      (response)=>{
        const userId = localStorage.getItem('userId');
        console.log(userId);
        this.fundrisers = response.filter((fund: any)=> fund.applicantId === localStorage.getItem('userId')).reverse();
      }
    )
  }

}
