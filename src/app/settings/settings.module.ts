import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SettingsComponent } from './settings.component';
import { SettingsNavbarComponent } from './components/settings-navbar/settings-navbar.component';
import { SettingsPageContentComponent } from './components/settings-page-content/settings-page-content.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { SettingsDeviceComponent } from './components/settings-device/settings-device.component';
import { SettingsStreamComponent } from './components/settings-stream/settings-stream.component';
import { SettingsAccessComponent } from './components/settings-access/settings-access.component';
import { SettingsLoginComponent } from './components/settings-login/settings-login.component';

import { SettingsRouterGuardService } from './settings-router-guard.service'

@NgModule({
    declarations: [
        SettingsComponent,
        SettingsNavbarComponent,
        SettingsPageContentComponent,
        SettingsPageComponent,
        SettingsDeviceComponent,
        SettingsStreamComponent,
        SettingsAccessComponent,
        SettingsLoginComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        SettingsRoutingModule
    ],
    providers: [SettingsRouterGuardService]
})
export class SettingsModule { }
