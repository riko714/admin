import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string= 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  listUsers(){
    this.http.get(baseUrl + 'users')
  }

}
