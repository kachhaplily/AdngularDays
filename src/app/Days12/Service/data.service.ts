import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = '/api';

  constructor( private http:HttpClient) { }
  getData():Observable<any>{
    return this.http.get(`${this.apiUrl}/contacts`);
  }
}
