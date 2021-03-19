import { createAction, props } from '@ngrx/store';
import { Chromecast } from 'src/app/models/chromecast';

export const addChromecast = createAction(
  '[Chromecast] Add Chromecast',
  props<Chromecast>()
);

export const removeChromecast = createAction(
  '[Chromecast] Remove Chromecast',
  props<Chromecast>()
);

export const getAllChromecasts = createAction(
  '[Chromecast API] Get Chromecasts'
);
