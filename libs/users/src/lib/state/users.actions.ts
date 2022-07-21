import { createAction, props } from '@ngrx/store';
import { User } from '../models/users';


export const buildUserSession = createAction('[Users] Build User Session')
//export const init = createAction('[Users Page] Init');

export const buildUserSessionSuccess = createAction(
  '[Users] Build User Session Success',
  props<{ user: User }>()
);

export const buildUserSessionFailed = createAction('[Users] Build User Session Failed');
