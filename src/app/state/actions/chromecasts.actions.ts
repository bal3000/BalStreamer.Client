import { createAction, props } from '@ngrx/store';

export const addChromecast = createAction(
  '[Chromecast] Add Chromecast',
  props<{ chromecast: string }>()
);

export const removeChromecast = createAction(
  '[Chromecast] Remove Chromecast',
  props<{ chromecast: string }>()
);

export const getAllChromecasts = createAction(
  '[Chromecast API] Get Chromecasts'
);
