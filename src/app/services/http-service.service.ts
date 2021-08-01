import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpHeader = new HttpHeaders();
httpHeader.set('Content-Type', 'Application/json');

@Injectable({
  providedIn:'root'
})
export class HttpServiceService {

  constructor(
    private http: HttpClient
  ) { }

  /*----------------------------------------  apis -------------------------------------- */
  getUsersData(path: string, params?: HttpParams): Observable<any> {

    return this.http.get(`${path}`,
      { headers: httpHeader, params }).pipe();
  }


}
