import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '../services/base-http.service';

@Injectable()
export class SkiPackageService extends BaseHttpService{

  constructor(http: HttpClient) {
    super('http://localhost:8080/skiingpackage/', http);
   }
}
