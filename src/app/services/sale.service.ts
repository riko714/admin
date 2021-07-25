import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SaleService {

  baseUrl: string = 'http://192.168.1.231:3000/api/'; 
  // baseUrl: string= 'https://jsonplaceholder.typicode.com/';  users
 
  constructor(private http: HttpClient) {    
  }

  listSales(){
    console.log(this.baseUrl+'endsales');
    return this.http.get(this.baseUrl+'endsales');

  }
    
    
  
}
