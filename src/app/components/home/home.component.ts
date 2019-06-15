import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router"
import { Subscription } from 'rxjs';

import { AuthService, LoginResponseData } from '../../shared/services/auth.service';
import { StreamService } from '../../shared/services/stream.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    private loading: boolean = false;

    status: String = 'STOPPED';
    watchingPeaple: number = 0;

    private statusChangedSubs: Subscription;
    private watchingChangedSubs: Subscription;
    private LoginSubs: Subscription;
    private LogoutSubs: Subscription;

    constructor(
        private auth: AuthService,
        private stream: StreamService,
        private router: Router
    ){}

    ngOnInit(){

        if(this.stream.getCurrentStatus() != 'STOPPED'){
            this.status = this.stream.getCurrentStatus();
            this.watchingPeaple = this.stream.getCurrentWatchingPeaple();
        }

        this.LoginSubs = this.auth.onLogin.subscribe(
            (response) => this.onLoginResponde(response)
        );

        this.LogoutSubs = this.auth.onLogout.subscribe(
            (response) => this.onLogoutResponde(response)
        );

        this.statusChangedSubs = this.stream.statusChanged.subscribe(
            (response) => this.onStatusChange(response)
        );

        this.watchingChangedSubs = this.stream.watchingChanged.subscribe(
            (status) => this.onWatchingChange(status)
        );
    }

    ngOnDestroy(){
        this.LoginSubs.unsubscribe();
        this.LogoutSubs.unsubscribe();
        this.statusChangedSubs.unsubscribe();
        this.watchingChangedSubs.unsubscribe();
    }

    onLoginResponde(response: LoginResponseData): void {
        this.loading = false;
        if(response.success){
            this.router.navigate(['/settings']);
        }
    }

    onLogout(){
        this.auth.doLogout();
    }

    onLogoutResponde(response: LoginResponseData): void {
        this.loading = false;
    }

    private onStatusChange(status: any): void {
        this.status = status['status'];
    }

    private onWatchingChange(status: any): void {
        this.watchingPeaple = status.watchingPeaple
    }
}
