import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";
    return this.http.get(url);
  }
}