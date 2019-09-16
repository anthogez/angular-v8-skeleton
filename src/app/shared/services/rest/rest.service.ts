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
  ): Observable<Response> {
    return this.http.get<Response>(url, this.createOptions(params, headers));
  }

  post(
    url: string,
    body?: any,
    params?: string | URLSearchParams | { [key: string]: any | any[] } | null,
    headers?: HttpHeaders | null
  ): Observable<Response> {
    return this.http.post<Response>(
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
  ): Observable<Response> {
    return this.http.put<Response>(
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
    const headers = new HttpHeaders();
    // headers.append('Authorization', 'none apply me');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
