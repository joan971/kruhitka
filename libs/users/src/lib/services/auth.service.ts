import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { User } from '../models/users';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURLUsers = environment.apiURL + 'users';

  constructor(
    private http: HttpClient,
    private token: LocalstorageService,
    private router: Router
    ) { }

  // method pour le log in au dashboard
  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiURLUsers}/login`, {email, password});
  }

  // method pour le log out au dashboard
  logout() {
    this.token.removeItem();
    this.router.navigate(['/login']);
  }
}
