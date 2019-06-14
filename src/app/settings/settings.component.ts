import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/services/auth.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    constructor(
        private auth: AuthService
    ){}

    ngOnInit(){}
}
