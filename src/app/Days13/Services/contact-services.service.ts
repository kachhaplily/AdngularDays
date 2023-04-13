import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactServicesService {
  private apiUrl = '/api';
  constructor(private http:HttpClient) {

  }
  adddata(data:any):Observable<any>{
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
   return this.http.post<any>(`${this.apiUrl}/contacts`,data,{ headers: headers })
  }

}
