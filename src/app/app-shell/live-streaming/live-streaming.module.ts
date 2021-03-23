import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { LiveStreamingRoutingModule } from './live-streaming-routing.module';
import { LiveStreamingComponent } from './live-streaming.component';
import { LiveStreamingState } from '../../state/livestreaming.state';

@NgModule({
  declarations: [LiveStreamingComponent],
  imports: [
    CommonModule,
    LiveStreamingRoutingModule,
    NgxsModule.forFeature([LiveStreamingState]),
  ],
  exports: [LiveStreamingComponent],
})
export class LiveStreamingModule {}
