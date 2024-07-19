import { HttpClient } from '@angular/common/http';

import { Injectable, inject } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// LoginService is wrapper and has a method to call the API hosted on SpringBoot
export class LoginService {
 
  http: HttpClient = inject(HttpClient);

  private apiUrl = 'http://localhost:8088/lgri/api/login';

  // this method returns a User instance that comes from the API
  login(name: string, email: string) : Observable<User> {
    
    const user:Observable<User> = this.http.post<User>(this.apiUrl, { name, email });
    return user;
  }
}
