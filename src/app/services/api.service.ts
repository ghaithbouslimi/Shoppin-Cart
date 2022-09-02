import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL =environment.SERVER_URL ; 
  constructor(private http : HttpClient) { }

   getProduct(){
    return this.http.get<any>(this.SERVER_URL + '/products');
   }
}
