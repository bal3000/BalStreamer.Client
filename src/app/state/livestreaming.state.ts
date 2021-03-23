import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { LiveFixture } from '../models/live-fixture';

export interface LiveStreamingStateModel {
  fixtures: LiveFixture[];
  selectedFixture: LiveFixture | undefined;
}

@State<LiveStreamingStateModel>({
  name: 'livestreaming',
  defaults: {
    fixtures: [],
    selectedFixture: undefined,
  },
})
@Injectable()
export class LiveStreamingState {}
