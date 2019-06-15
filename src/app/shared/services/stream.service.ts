import { Injectable, OnInit, OnDestroy, Output,  EventEmitter } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

export interface StatusResponse {
    status: String;
    watching: number;
}

export interface ResponseData {
    result: boolean;
    message: String;
    data: StatusResponse;
}

@Injectable({
    providedIn: 'root'
})
export class StreamService implements OnInit, OnDestroy {

    private statusUrl: string = environment.streamControlUrls.status;
    private startUrl: string = environment.streamControlUrls.start;
    private stopUrl: string = environment.streamControlUrls.stop;

    private subscription: Subscription;
    private status: String = "NONE";
    private watchingPeaple: number = 0;

    readonly statusChanged = new EventEmitter();
    readonly watchingChanged = new EventEmitter();
    readonly actionResponse = new EventEmitter();

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.subscription = timer(0, 10000).subscribe(() => this.fetchStatus());
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    private fetchStatus(): void {
        this.http.get<ResponseData>(this.statusUrl)
                 .subscribe((data: ResponseData) => this.onFetchStatus(data));
    }

    private onFetchStatus(response: ResponseData): void {

        if(!response.result) return;

        if(this.status != response.data.status){

            this.statusChanged.emit({
                status: response.data.status,
                oldStatus: this.status,
                response: response
            });

            this.status = response.data.status;
        }

        if(this.watchingPeaple != response.data.watching){
            this.watchingChanged.emit({
                watchingPeaple: response.data.watching,
                oldWatchingPeaple: this.watchingPeaple,
                response: response
            });

            this.watchingPeaple = response.data.watching;
        }
    }

    start(): void {
        this.http.get<ResponseData>(this.startUrl)
                 .subscribe((data: ResponseData) => this.onStartResponse(data));
    }

    onStartResponse(response: ResponseData){
        this.onFetchStatus(response);
        this.actionResponse.emit({
            'action': 'start',
            'respose': response
        });
    }

    stop(): void {
        this.http.get<ResponseData>(this.stopUrl)
                 .subscribe((data: ResponseData) => this.onStopResponse(data));
    }

    onStopResponse(response: ResponseData){
        this.onFetchStatus(response);
        this.actionResponse.emit({
            'action': 'stop',
            'response': response
        });
    }

    getCurrentStatus(): String {
        return this.status;
    }

    getCurrentWatchingPeaple(): number {
        return this.watchingPeaple;
    }

    private getHostName() : string{
        return window.location.hostname;
    }

    getStreamHostUrl(): string {

        let host:string = this.getHostName();
        if(environment.hasOwnProperty('serverStreamHost')){
            host = environment['serverStreamHost'];
        }

        let port:number = 8088;
        if(environment.hasOwnProperty('serverStreamPort')){
            port = environment['serverStreamPort'];
        }

        return 'ws://' + host + ':' + String(port);
    }

    getStreamProtocol(): string {
        return  environment.hasOwnProperty('serverStreamProtocol') ?
                environment['serverStreamProtocol'] : 'ws-mpegts';
    }
}
