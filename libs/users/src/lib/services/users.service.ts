import { UsersFacade } from './../state/users.facade';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../models/users';
import { environment } from '../../../../../environments/environment';



@Injectable({
  providedIn: 'root'
})


export class UsersService {

  apiURLUsers = environment.apiURL + 'users';



  constructor(
    private http: HttpClient,
    private usersFacade: UsersFacade
    ) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURLUsers);
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiURLUsers}/${userId}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiURLUsers, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiURLUsers}/${user.id}`, user);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURLUsers}/${userId}`);
  }

  getUsersCount(): Observable<number> {
    return this.http
      .get<number>(`${this.apiURLUsers}/get/count`)
      .pipe(map((objectValue: any) => objectValue.userCount));
  }
  initAppSession(){
    this.usersFacade.buildUserSession();
  }

  observeCurrentUser(){
    return this.usersFacade.currentUser$;
  }

  isCurrentUserIsAuth(){
    return this.usersFacade.isAuthenticated$;
  }
}
