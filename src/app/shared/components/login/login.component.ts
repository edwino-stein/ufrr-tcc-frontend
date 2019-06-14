import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router"
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService, LoginResponseData } from '../../services/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private passwdError: String = "";
    private formError: boolean = false;
    private submited: boolean = false;
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

    onLogin(form: NgForm){

        this.submited = true;
        this.formError = false;

        if(form.valid){
            this.loading = true;
            this.auth.doLogin(
                environment.defaultUser,
                form.controls.password.value
            );
            return;
        }

        if(form.controls.password.value == ""){
            this.passwdError = "Digite uma senha";
        }

        this.formError = true;
    }

    onLoginResponde(response: LoginResponseData): void {
        this.loading = false;
        if(!response.success){
            this.formError = true;
            this.passwdError = response.message;
        }
        else{
            this.formError = false;
        }
    }

    onLogoutResponde(response: LoginResponseData): void {
        this.loading = false;
        this.formError = false;
        this.submited = false;
    }

}
