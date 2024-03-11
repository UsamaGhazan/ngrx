import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { BookReducer } from '../books/book.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  books:BookReducer

};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
