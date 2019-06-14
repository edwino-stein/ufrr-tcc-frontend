import { Component, OnInit, OnDestroy, AfterViewChecked, ElementRef, Renderer2, HostListener, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { StreamService } from '../../../shared/services/stream.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit, OnDestroy, AfterViewChecked {

    private streamHost: string;
    private streamprotocol: string;

    @Input() aspectRatio: string = "4:3";
    private _aspectRario: number[];

    private statusChangedSubs: Subscription;

    private isStreaming: boolean = false;
    private loading: boolean = true;
    private status: String = 'WAITING';

    @HostListener('window:resize', ['$event'])
    private onResize(event) {
        this.updateSize();
    }

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private streamService: StreamService
    ){}

    ngOnInit() {

        this.streamHost = this.streamService.getStreamHostUrl();
        this.streamprotocol = this.streamService.getStreamProtocol();

        if(this.streamService.getCurrentStatus() != 'WAITING'){
            this.loading = false;
            this.status = this.streamService.getCurrentStatus();
        }

        this.statusChangedSubs = this.streamService.statusChanged.subscribe(
            (status) => this.onStatusChange(status)
        );

        let ar = this.aspectRatio.split(':');
        this._aspectRario = [Number(ar[0]), Number(ar[1])];

        if(this.status == 'RUNNING') this.isStreaming = true;
    }

    ngOnDestroy(){
        this.statusChangedSubs.unsubscribe();
    }

    ngAfterViewChecked(): void {
        this.updateSize();
    }

    private updateSize(){

        let screenEl = this.getScreen();
        if(screenEl == null){
            setTimeout(() => this.updateSize(), 10);
            return;
        }

        let screenWidth = screenEl.offsetWidth ? screenEl.offsetWidth : 0;
        if(screenWidth <= 0){
            setTimeout(() => this.updateSize(), 10);
            return;
        }

        let maxHeight: number = window.document.body.offsetHeight - (20 + 50 + 20);
        let maxWidth: number = maxHeight * (this._aspectRario[0]/this._aspectRario[1]);
        let height: number = screenWidth * (this._aspectRario[1]/this._aspectRario[0]);

        this.renderer.setStyle(screenEl, 'max-width', maxWidth + 'px');
        this.renderer.setStyle(screenEl, 'height', height + 'px');
    }

    private getScreen(): any {
        let screenEl = this.elementRef.nativeElement.getElementsByClassName("screen")[0];
        return screenEl ? screenEl : null;
    }

    private onStatusChange(status: any): void {
        this.loading = false;
        this.status = status['status'];
        console.log(this.status);

        if(this.status == 'RUNNING') this.isStreaming = true;
        else this.isStreaming = false;
    }
}
