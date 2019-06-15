import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

import { StreamService } from '../shared/services/stream.service';

@Component({
    selector: 'app-video-viewer',
    templateUrl: './video-viewer.component.html',
    styleUrls: ['./video-viewer.component.css']
})
export class VideoViewerComponent implements OnInit, OnDestroy {

    private statusChangedSubs: Subscription;
    private watchingChangedSubs: Subscription;

    loading: boolean = true;
    status: String = 'STOPPED';
    watchingPeaple: number = 0;

    constructor(
        private streamService: StreamService,
        private renderer: Renderer2
    ) {}

    ngOnInit(){

        if(this.streamService.getCurrentStatus() != 'STOPPED'){
            this.loading = false;
            this.status = this.streamService.getCurrentStatus();
            this.watchingPeaple = this.streamService.getCurrentWatchingPeaple();
        }

        this.statusChangedSubs = this.streamService.statusChanged.subscribe(
            (status) => this.onStatusChange(status)
        );

        this.watchingChangedSubs = this.streamService.watchingChanged.subscribe(
            (status) => this.onWatchingChange(status)
        );

        this.renderer.addClass(<any>document.body, 'no-footer');
    }

    ngOnDestroy(){
        this.statusChangedSubs.unsubscribe();
        this.watchingChangedSubs.unsubscribe();
        this.renderer.removeClass(<any>document.body, 'no-footer');
    }

    private onStatusChange(status: any): void {
        this.loading = false;
        this.status = status['status'];
    }

    private onWatchingChange(status: any): void {
        this.watchingPeaple = status.watchingPeaple
    }
}
