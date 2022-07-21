import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersPartialState, UsersState, USERS_FEATURE_KEY } from './users.reducer';

// Lookup the 'Users' feature state managed by NgRx
export const getUsersState = createFeatureSelector<UsersPartialState, UsersState>(USERS_FEATURE_KEY);

export const getUser = createSelector(getUsersState, (state) => state.user);

export const getUserIsAuth = createSelector(getUsersState, (state) => state.isAuthenticated);
// const { selectAll, selectEntities } = usersAdapter.getSelectors();

// export const getUsersLoaded = createSelector(
//   getUsersState,
//   (state: State) => state.loaded
// );

// export const getUsersError = createSelector(
//   getUsersState,
//   (state: State) => state.error
// );

// export const getAllUsers = createSelector(getUsersState, (state: State) =>
//   selectAll(state)
// );

// export const getUsersEntities = createSelector(getUsersState, (state: State) =>
//   selectEntities(state)
// );

// export const getSelectedId = createSelector(
//   getUsersState,
//   (state: State) => state.selectedId
// );

// export const getSelected = createSelector(
//   getUsersEntities,
//   getSelectedId,
//   (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
// );
