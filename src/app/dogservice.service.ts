import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DogserviceService {

  constructor(private http:HttpClient) { }

  getDogImage(){
    return this.http.get('https://dog.ceo/api/breeds/image/random');
  }
}
