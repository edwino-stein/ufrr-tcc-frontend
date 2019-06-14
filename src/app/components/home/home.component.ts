import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router"
import { Subscription } from 'rxjs';

import { AuthService, LoginResponseData } from '../../shared/services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    private loading: boolean = false;

    private LoginSubs: Subscription;
    private LogoutSubs: Subscription;

    constructor(
        private auth: AuthService,
        private router: Router
    ){}

    ngOnInit(){

        this.LoginSubs = this.auth.onLogin.subscribe(
            (response) => this.onLoginResponde(response)
        );

        this.LogoutSubs = this.auth.onLogout.subscribe(
            (response) => this.onLogoutResponde(response)
        );
    }

    ngOnDestroy(){
        this.LoginSubs.unsubscribe();
        this.LogoutSubs.unsubscribe();
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
}
