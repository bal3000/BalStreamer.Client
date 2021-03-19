import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Injectable } from '@angular/core';
import { Chromecast } from '../models/chromecast';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChromecastService {
  private chromecastWs: WebSocketSubject<Chromecast> = webSocket(
    'ws://localhost:8080'
  );

  constructor() {}

  getChromecasts(): Observable<Chromecast> {
    return this.chromecastWs.asObservable();
  }
}
