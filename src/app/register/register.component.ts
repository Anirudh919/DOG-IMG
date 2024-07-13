import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:string='';
  mobile:string='';
  age:number | null =null;
  address:string='';
  state:string='';
  city:string='';

  states: string[]=['State 1','State 2','State 3'];

  

  cities: { [key: string]: string[] } = {
    'State 1': ['City 1', 'City 2', 'City 3'],
    'State 2': ['City A', 'City B', 'City C'],
    'State 3': ['City H', 'City G', 'City L'],
  };
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.name,this.mobile,this.age,this.address,this.state,this.city);
    this.route.navigate(['/login'])
  }


  onStateChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.state = target.value;
    this.city = ''; 
  }

}
