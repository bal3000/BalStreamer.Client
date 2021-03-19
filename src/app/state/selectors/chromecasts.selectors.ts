import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Chromecast } from 'src/app/models/chromecast';
import { AppState } from '../app.state';

export const selectChromecasts = createFeatureSelector<
  AppState,
  ReadonlyArray<Chromecast>
>('chromecasts');

export const selectChromecastNames = createSelector(
  selectChromecasts,
  (chromecast: ReadonlyArray<Chromecast>) => chromecast.map((c) => c.chromecast)
);

export const selectedChromecast = createSelector(
  (state: AppState) => state.selectedChromecast,
  (chromecast: Chromecast | undefined) => {
    if (chromecast) {
      return chromecast;
    }
    return null;
  }
);
