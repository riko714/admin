import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string= 'http://192.168.1.231:3000/api/';

  constructor(private http: HttpClient) { }




  getlistJJproducts(){
    console.log(this.baseUrl+'jj');
    return this.http.get(this.baseUrl+'jj');

  }
}
