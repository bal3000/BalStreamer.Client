import { createReducer, on, Action } from '@ngrx/store';
import {
  addChromecast,
  removeChromecast,
} from '../actions/chromecasts.actions';

export const initialState: ReadonlyArray<string> = [];

export const chromecastsReducer = createReducer(
  initialState,
  on(addChromecast, (state, { chromecast }) => {
    if (state.indexOf(chromecast) > -1) {
      return state;
    }

    return [...state, chromecast];
  }),
  on(removeChromecast, (state, { chromecast }) =>
    state.filter((c) => c !== chromecast)
  )
);
