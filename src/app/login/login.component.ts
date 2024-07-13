import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DogserviceService } from '../dogservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginId: string = '';
  password: string = '';

  constructor(private router:Router, private service:DogserviceService) {
    console.log("login")
   }

  ngOnInit(): void {
  }

 
  login(): void {
    this.router.navigate(['/random-dog']);
  }

}
