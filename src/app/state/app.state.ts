import { Chromecast } from '../models/chromecast';

export interface AppState {
  chromecasts: ReadonlyArray<Chromecast>;
  selectedChromecast?: Chromecast;
}
