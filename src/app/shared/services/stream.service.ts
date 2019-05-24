import { Injectable, OnInit, OnDestroy, Output,  EventEmitter } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

export interface StatusResponse {
    status: String;
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

    readonly statusChanged = new EventEmitter();
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

    private onFetchStatus(respose: ResponseData): void {

        if(!respose.result) return;

        if(this.status != respose.data.status){

            this.statusChanged.emit({
                status: respose.data.status,
                oldStatus: this.status,
                respose: respose
            });

            this.status = respose.data.status;
        }
    }

    start(): void {
        this.http.get<ResponseData>(this.startUrl)
                 .subscribe((data: ResponseData) => this.onStartResponse(data));
    }

    onStartResponse(respose: ResponseData){
        this.actionResponse.emit({
            'action': 'start',
            'respose': respose
        });
    }

    stop(): void {
        this.http.get<ResponseData>(this.stopUrl)
                 .subscribe((data: ResponseData) => this.onStopResponse(data));
    }

    onStopResponse(respose: ResponseData){
        this.actionResponse.emit({
            'action': 'stop',
            'respose': respose
        });
    }

    getCurrentStatus(): String {
        return this.status;
    }
}
