import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent {


  authType: string = 'login';
  username: string = '';
  email: string = '';
  password: string = '';
  usertype: string = '';

  details: {} = {};

  constructor(private http: HttpClient, private route: Router){ }

  register(){

    this.details = {username: this.username, email: this.email,
                       usertype: this.usertype, password: this.password};
    this.http.post('http://localhost:6001/register', this.details).subscribe(
        (response:any) =>{
          localStorage.setItem('userId', response._id);
          localStorage.setItem('username', response.username);
          localStorage.setItem('email', response.email);
          localStorage.setItem('usertype', response.usertype);
          this.username = '';
          this.email = '';
          this.password='';
          this.usertype = '';

          if (response.usertype === 'user'){
            this.route.navigate(['/']);
          }else if(response.usertype === 'admin'){
            this.route.navigate(['/admin']);
          }
        },
        (error) => {
          console.error(error);
        }
    )
  }

  login(){
    
    this.details = {email: this.email, password: this.password};
    
    this.http.post('http://localhost:6001/login', this.details).subscribe(
        (response:any) =>{
          localStorage.setItem('userId', response._id);
          localStorage.setItem('username', response.username);
          localStorage.setItem('email', response.email);
          localStorage.setItem('usertype', response.usertype);
          this.username = '';
          this.email = '';
          this.password='';
          this.usertype = '';

          if (response.usertype === 'user'){
            this.route.navigate(['/']);
          }
          else if(response.usertype === 'admin'){
            this.route.navigate(['/admin']);          
          }
        },
        (error) => {
          console.error(error);
        }
    )
  }

}
