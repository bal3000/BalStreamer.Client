import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ChromecastService } from '../../services/chromecast.service';
import { addChromecast } from '../../state/actions/chromecasts.actions';
import { selectChromecasts } from '../../state/selectors/chromecasts.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  chromecasts$ = this.store.pipe(select(selectChromecasts));

  constructor(
    private readonly store: Store,
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
