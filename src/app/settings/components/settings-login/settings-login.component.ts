import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';

import { AuthService, LoginResponseData } from '../../../shared/services/auth.service';

@Component({
    selector: 'app-settings-login',
    templateUrl: './settings-login.component.html',
    styleUrls: ['./settings-login.component.css']
})
export class SettingsLoginComponent implements OnInit, OnDestroy {

    private LoginSubs: Subscription;

    constructor(private router: Router, private auth: AuthService){}

    ngOnInit() {
        this.LoginSubs = this.auth.onLogin.subscribe(
            (response) => this.onLoginResponde(response)
        );
    }

    ngOnDestroy(){
        this.LoginSubs.unsubscribe();
    }

    onBack(){
        if((<any>window).history.state['navigationId'] >= 3){
            (<any>window).history.go(-1);
        }
        else {
            this.router.navigate(['/']);
        }
    }

    onLoginResponde(response: LoginResponseData): void {
        if(response.success){
            this.router.navigate(['/settings/stream']);
        }
    }
}
