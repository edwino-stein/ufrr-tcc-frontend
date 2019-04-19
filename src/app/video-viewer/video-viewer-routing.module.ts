import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoViewerComponent } from './video-viewer.component';

const videoViewerRoutes: Routes = [
    {path: 'video-viewer', component: VideoViewerComponent}
];

@NgModule({
    imports: [RouterModule.forChild(videoViewerRoutes)],
    exports: [RouterModule]
})
export class VideoViewerRoutingModule { }
