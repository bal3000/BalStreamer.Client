import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { LiveStreamingState } from '../../../state/livestreaming.state';
import { LiveFixture } from '../../../models/live-fixture';
import { PopulateFixtures } from '../../../state/actions/livestreaming.actions';
import { SportType } from 'src/app/models/sport-type.enum';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss'],
})
export class FixturesComponent implements OnInit {
  @Select(LiveStreamingState.fixtures)
  fixtures$!: Observable<LiveFixture[]>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(
      new PopulateFixtures(
        SportType.Soccer,
        new Date(Date.now()),
        new Date(Date.now())
      )
    );
  }
}
