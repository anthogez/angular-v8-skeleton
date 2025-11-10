import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) {}

  get(
    url: string,
    params?: string | URLSearchParams | { [key: string]: any | any[] } | null,
    headers?: HttpHeaders | null
  ): Observable<any> {
    return this.http.get<any>(url, this.createOptions(params, headers));
  }

  post(
    url: string,
    body?: any,
    params?: string | URLSearchParams | { [key: string]: any | any[] } | null,
    headers?: HttpHeaders | null
  ): Observable<any> {
    return this.http.post<any>(
      url,
      body,
      this.createOptions(params, headers)
    );
  }

  put(
    url: string,
    body?: any,
    params?: string | URLSearchParams | { [key: string]: any | any[] } | null,
    headers?: HttpHeaders | null
  ): Observable<any> {
    return this.http.put<any>(
      url,
      body,
      this.createOptions(params, headers)
    );
  }

  createOptions(
    params?: string | URLSearchParams | { [key: string]: any | any[] } | null,
    headers?: HttpHeaders | null
  ) {
    headers = headers || this.headersMaker();
    return { headers: headers };
  }

  // TODO paramsMaker() | paramsHandler()

  headersMaker() {
    let headers = new HttpHeaders();
    // headers.append('Authorization', 'none apply me');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Content-Type', 'application/json');
    return headers;
  }
}
