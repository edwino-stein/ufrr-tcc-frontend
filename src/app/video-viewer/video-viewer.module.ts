import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoViewerRoutingModule } from './video-viewer-routing.module';
import { VideoViewerComponent } from './video-viewer.component';
import { VideoComponent } from './components/video/video.component';
import { SharedModule } from '../shared/shared.module';
import { JsMpegService } from './services/js-mpeg.service';
import { MpegPlayerComponent } from './components/mpeg-player/mpeg-player.component';
import { VideoStatusBarItemComponent } from './components/video-status-bar-item/video-status-bar-item.component';
import { VideoStatusBarComponent } from './components/video-status-bar/video-status-bar.component';

@NgModule({
    declarations: [
        VideoViewerComponent,
        VideoComponent,
        MpegPlayerComponent,
        VideoStatusBarItemComponent,
        VideoStatusBarComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        VideoViewerRoutingModule
    ],
    providers:[
        JsMpegService
    ]
})
export class VideoViewerModule { }
