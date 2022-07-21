import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { UsersService } from '@redbits/users';
import { of } from 'rxjs/internal/observable/of';
import { catchError, concatMap, map } from 'rxjs/operators';
import { LocalstorageService } from '../services/localstorage.service';
import * as UsersActions from './users.actions';


@Injectable()
export class UsersEffects {

  buildUserSession$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.buildUserSession),
    concatMap(() => {
      if (this.localstorageService.isValidToken()) {
        const userId = this.localstorageService.getUserIdFromToken()
        if (userId) {
          return this.usersService.getUser(userId).pipe(map((user) => {
            return UsersActions.buildUserSessionSuccess({ user: user })
          }),
            catchError(() => of(UsersActions.buildUserSessionFailed()))
          )
        } else {
          return of(UsersActions.buildUserSessionFailed())
        }
      } else {
        return of(UsersActions.buildUserSessionFailed())
      }
    })
  ))

  constructor(
    private readonly actions$: Actions,
    private localstorageService: LocalstorageService,
    private usersService: UsersService
  ) { }
}
