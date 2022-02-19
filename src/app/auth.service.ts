import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private regURL = "http://localhost:3000/register";

  constructor(private http: HttpClient) {

  }

  registerNewUser<T>(userData: {username: string, password: string}): Observable<any> {
    return this.http.post<T>(this.regURL, userData);
  }
}
