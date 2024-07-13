import { Component, OnInit } from '@angular/core';
import { DogserviceService } from '../dogservice.service';

@Component({
  selector: 'app-random-dog',
  templateUrl: './random-dog.component.html',
  styleUrls: ['./random-dog.component.css']
})
export class RandomDogComponent implements OnInit {

  dogImage: any='';

  constructor(private service:DogserviceService) { }

  ngOnInit(): void {
    this.getRandomDog();
  }


  getRandomDog(): void {
    this.service.getDogImage().subscribe(
      (data: any) => {
        this.dogImage = data.message;
      },
      (error) => {
        console.error('Error fetching dog image:', error);
      }
    );
  }



}
