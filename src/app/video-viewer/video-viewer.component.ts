import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { StreamService } from '../shared/services/stream.service';

@Component({
    selector: 'app-video-viewer',
    templateUrl: './video-viewer.component.html',
    styleUrls: ['./video-viewer.component.css']
})
export class VideoViewerComponent implements OnInit, OnDestroy {

    private statusChangedSubs: Subscription;

    loading: boolean = true;
    status: String = 'WAITTING';
    watchingPeaple: number = 0;

    constructor(private streamService: StreamService) { }

    ngOnInit(){

        if(this.streamService.getCurrentStatus() != 'WAITING'){
            this.loading = false;
            this.status = this.streamService.getCurrentStatus();
        }

        this.statusChangedSubs = this.streamService.statusChanged.subscribe(
            (status) => this.onStatusChange(status)
        );
    }

    ngOnDestroy(){
        this.statusChangedSubs.unsubscribe();
    }

    private onStatusChange(status: any): void {
        this.loading = false;
        this.status = status['status'];
        console.log(status['status']);
    }
}
