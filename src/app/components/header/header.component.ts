import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { ChromecastService } from '../../services/chromecast.service';
import { addChromecast } from '../../state/actions/chromecasts.actions';
import { selectChromecastNames } from '../../state/selectors/chromecasts.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  chromecasts$ = this.store.pipe(select(selectChromecastNames));

  constructor(
    private readonly store: Store<AppState>,
    private readonly chromecastService: ChromecastService
  ) {}

  ngOnInit(): void {
    this.chromecastService.getChromecasts().subscribe(
      (chromecast) => this.store.dispatch(addChromecast(chromecast)),
      (err) => console.log(err),
      () => console.log('complete')
    );
  }
}
