import { Component, OnInit } from '@angular/core';
import { DogserviceService } from './dogservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(private dogService: DogserviceService) {}

  ngOnInit(): void {
   
  }


}
