import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveStreamingRoutingModule } from './live-streaming-routing.module';
import { LiveStreamingComponent } from './live-streaming.component';

@NgModule({
  declarations: [LiveStreamingComponent],
  imports: [CommonModule, LiveStreamingRoutingModule],
  exports: [LiveStreamingComponent],
})
export class LiveStreamingModule {}
