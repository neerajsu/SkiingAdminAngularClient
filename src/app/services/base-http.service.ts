import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class BaseHttpService {
  constructor(private url: string, private http: HttpClient) { }
  get() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  create(resource) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http .post(this.url, JSON.stringify(resource), httpOptions).pipe(catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete(this.url + id).pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    return throwError(new AppError(error));
  }
}