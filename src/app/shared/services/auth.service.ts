import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, timer } from 'rxjs';
import { environment } from '../../../environments/environment'

export interface LoginResponseData {
    success: boolean;
    message: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private loginUrl: string = environment.authUrls.login;
    private logoutUrl: string = environment.authUrls.logout;

    private session: boolean = false;

    readonly onLogin = new EventEmitter();
    readonly onLogout = new EventEmitter();

    constructor(private http: HttpClient) {
        this.session = (<any>window).serverSession.hasSession;
    }

    checkSession(): boolean {
        return this.session;
    }

    doLogin(username: string, password: string): void {

        let fd = new FormData();
        fd.append('_username', username);
        fd.append('_password', password);

        this.http.post<LoginResponseData>(this.loginUrl, fd)
                 .subscribe((data: LoginResponseData) => this.onLoginResponde(data));
    }

    private onLoginResponde(data: LoginResponseData): void {
        this.session = data.success;
        this.onLogin.emit(data);
    }

    doLogout(): void {
        this.http.get<LoginResponseData>(this.logoutUrl)
                 .subscribe((data: LoginResponseData) => this.onLogoutResponde(data));
    }

    private onLogoutResponde(data: LoginResponseData): void {
        this.session = data.success;
        this.onLogout.emit(data);
    }
}
