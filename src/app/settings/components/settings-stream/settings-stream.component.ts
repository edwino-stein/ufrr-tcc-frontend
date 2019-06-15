import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StreamService } from '../../../shared/services/stream.service'

@Component({
    selector: 'app-settings-stream',
    templateUrl: './settings-stream.component.html',
    styleUrls: ['./settings-stream.component.css']
})
export class SettingsStreamComponent implements OnInit, OnDestroy {

    private statusChangedSubs: Subscription;
    private actionResponseSubs: Subscription;
    private watchingChangedSubs: Subscription;

    loading: boolean = true;
    status: String = 'NONE';
    watchingPeaple: number = 0;

    constructor(private streamService: StreamService){}

    ngOnInit(){

        if(this.streamService.getCurrentStatus() != 'NONE'){
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

        this.actionResponseSubs = this.streamService.actionResponse.subscribe(
            (respose) => this.onAction(respose)
        );
    }

    ngOnDestroy(){
        this.statusChangedSubs.unsubscribe();
        this.actionResponseSubs.unsubscribe();
        this.watchingChangedSubs.unsubscribe();
    }

    private onStatusChange(status: any): void {
        this.loading = false;
        this.status = status['status'];
    }

    private onWatchingChange(status: any): void {
        this.watchingPeaple = status.watchingPeaple
    }

    private onAction(respose: any): void {
        this.loading = false;
    }

    onStartBtnClicked(){
        this.loading = true;
        this.streamService.start();
    }

    onStopBtnClicked(){
        this.loading = true;
        this.streamService.stop();
    }
}
