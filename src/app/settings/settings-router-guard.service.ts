import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service'

@Injectable()
export class SettingsRouterGuardService implements CanActivate {

    private rootRoute: string = '/settings';
    private loginRoute: string = '/settings/login';

    constructor(
        private auth: AuthService,
        private router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {

        if(this.auth.checkSession()){

            if(state.url == this.rootRoute){
                return this.router.createUrlTree(['/settings/stream']);
            }

            if(state.url == this.loginRoute){
                return this.router.createUrlTree(['/settings/stream']);
            }

            return true;
        }
        else {
            if(state.url == this.loginRoute) return true;
            return this.router.createUrlTree([this.loginRoute]);
        }
    }
}
