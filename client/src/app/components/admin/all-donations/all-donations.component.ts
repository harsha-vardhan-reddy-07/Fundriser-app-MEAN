import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-donations',
  templateUrl: './all-donations.component.html',
  styleUrls: ['./all-donations.component.css']
})
export class AllDonationsComponent implements OnInit {

  donations: any[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.fetchUsers();
}

fetchUsers(){
  this.http.get<any>('http://localhost:6001/fetch-donations').subscribe(
    (response)=>{
      this.donations = response;
    }
  )
}

}
