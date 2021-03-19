import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Chromecast } from 'src/app/models/chromecast';
import { AppState } from '../app.state';

export const selectChromecasts = createFeatureSelector<AppState>('chromecasts');

// export const selectChromecasts = ({ chromecasts }) => {
//   return chromecasts.chromecasts;
// };

export const selectChromecastNames = createSelector(
  selectChromecasts,
  ({ chromecasts }) => {
    if (chromecasts.length) {
      return chromecasts.map((c) => c.chromecast);
    }
    return [];
  }
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
