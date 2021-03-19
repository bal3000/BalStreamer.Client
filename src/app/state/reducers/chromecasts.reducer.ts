import { createReducer, on } from '@ngrx/store';
import {
  addChromecast,
  removeChromecast,
} from '../actions/chromecasts.actions';
import { AppState } from '../app.state';

export const initialState: AppState = {
  chromecasts: [],
};

export const chromecastsReducer = createReducer(
  initialState,
  on(addChromecast, (state, chromecast) => {
    if (state.chromecasts.find((c) => c.chromecast === chromecast.chromecast)) {
      return state;
    }

    return { ...state, chromecasts: [...state.chromecasts, chromecast] };
  }),
  on(removeChromecast, (state, { chromecast }) => ({
    ...state,
    chromecasts: state.chromecasts.filter((c) => c.chromecast === chromecast),
  }))
);
