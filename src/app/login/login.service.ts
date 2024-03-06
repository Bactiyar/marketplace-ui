import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginInput } from './lognDto';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  login(payload: LoginInput): Observable<any> {
    return this.http
      .post<any>(`${environment.url}/api/user/login`, payload)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
}
