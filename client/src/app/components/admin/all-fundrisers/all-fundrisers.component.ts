import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-fundrisers',
  templateUrl: './all-fundrisers.component.html',
  styleUrls: ['./all-fundrisers.component.css']
})
export class AllFundrisersComponent  implements OnInit{

  fundrisers: any[] = [];

  constructor(private http: HttpClient, private route: Router){}

  ngOnInit(): void {
    this.fetchFundrisers();
}

  fetchFundrisers(){
    this.http.get<any>('http://localhost:6001/fetch-fundrisers').subscribe(
      (response)=>{
        this.fundrisers = response.reverse();
      }
    )
  }

}
 