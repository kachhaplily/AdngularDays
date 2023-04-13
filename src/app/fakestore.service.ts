
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakestoreService {

  constructor( private http:HttpClient) { }
  getfake():Observable<any>{
    return this.http.get('https://dummyjson.com/products');
  }
}
