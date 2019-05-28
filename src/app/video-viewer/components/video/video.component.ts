import { Component, OnInit, OnDestroy, ElementRef, HostListener, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { StreamService } from '../../../shared/services/stream.service';

import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit, OnDestroy {

    private env: object = environment;

    @Input() aspectRatio: string = "4:3";
    private _aspectRario: number[];

    private height: number;
    private maxWidth: number;

    private statusChangedSubs: Subscription;

    private loading: boolean = true;
    private status: String = 'WAITING';

    @HostListener('window:resize', ['$event'])
    private onResize(event) {
        this.updateSize();
    }

    constructor(
        private elementRef: ElementRef,
        private streamService: StreamService
    ){}

    ngOnInit() {

        if(this.streamService.getCurrentStatus() != 'WAITING'){
            this.loading = false;
            this.status = this.streamService.getCurrentStatus();
        }

        this.statusChangedSubs = this.streamService.statusChanged.subscribe(
            (status) => this.onStatusChange(status)
        );

        let ar = this.aspectRatio.split(':');
        this._aspectRario = [Number(ar[0]), Number(ar[1])];
        this.updateSize();
    }

    ngOnDestroy(){
        this.statusChangedSubs.unsubscribe();
    }

    private updateSize(){

        let screenWidth = this.getScreenWidth();
        if(screenWidth <= 0){
            setTimeout(() => this.updateSize(), 10);
            return;
        }

        let maxHeight: number = window.document.body.offsetHeight - (20 + 50 + 20);
        this.maxWidth = maxHeight * (this._aspectRario[0]/this._aspectRario[1]);
        this.height = screenWidth * (this._aspectRario[1]/this._aspectRario[0]);

    }

    private getScreenWidth(): number {
        let screenEl = this.elementRef.nativeElement.getElementsByClassName("screen")[0];
        return screenEl ? screenEl.offsetWidth : 0;
    }

    private onStatusChange(status: any): void {
        this.loading = false;
        this.status = status['status'];
        console.log(this.status);
    }
}
