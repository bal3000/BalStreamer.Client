import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectChromecastsState = createFeatureSelector<
  AppState,
  ReadonlyArray<string>
>('chromecasts');

export const selectChromecasts = createSelector(
  selectChromecastsState,
  (chromecasts) => chromecasts
);
