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

    loading: boolean = true;
    status: String = 'NONE';
    watchingPeaple: String = 'XX';

    constructor(private streamService: StreamService){}

    ngOnInit(){

        if(this.streamService.getCurrentStatus() != 'NONE'){
            this.loading = false;
            this.status = this.streamService.getCurrentStatus();
        }

        this.statusChangedSubs = this.streamService.statusChanged.subscribe(
            (status) => this.onStatusChange(status)
        );

        this.actionResponseSubs = this.streamService.actionResponse.subscribe(
            (respose) => this.onAction(respose)
        );
    }

    ngOnDestroy(){
        this.statusChangedSubs.unsubscribe();
        this.actionResponseSubs.unsubscribe();
    }

    private onStatusChange(status: any): void {
        this.loading = false;
        this.status = status['status'];
        console.log(status['status']);
    }

    private onAction(respose: any): void {
        this.loading = false;
        this.status = respose.respose.data.status;
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
