import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient, private router: Router) {}

  getPublic(url, options?): Observable<any> {
    options = { ...options, withCredentials: true };
    return this.http.get(url, options);
  }

  postPublic<T>(url, body, options?): Observable<any> {
    options = { ...options };
    return this.http.post(url, body, options);
  }
}
