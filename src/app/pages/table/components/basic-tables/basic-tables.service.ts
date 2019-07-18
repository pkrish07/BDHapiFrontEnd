import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BasicTableService {
  
  connectionUrl = '';   
  constructor(private http: HttpClient) { }


  getConfig() {
    return this.http.get(this.connectionUrl);
  }


}