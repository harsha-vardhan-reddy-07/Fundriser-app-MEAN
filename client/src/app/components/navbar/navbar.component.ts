import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  usertype: string | null = 'none';

ngOnInit(): void {
  this.fetchUserType();
}

fetchUserType(){
  const userid = localStorage.getItem('userId');
  const userType = localStorage.getItem('usertype');

  this.usertype = userType;
}

constructor(private route: Router){}

logout (){
  localStorage.clear();
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      localStorage.removeItem(key);
    }
  }
  this.fetchUserType();
  this.route.navigate(['/landing']);
}


}
