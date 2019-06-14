import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { SettingsDeviceComponent } from './components/settings-device/settings-device.component';
import { SettingsStreamComponent } from './components/settings-stream/settings-stream.component';
import { SettingsAccessComponent } from './components/settings-access/settings-access.component';
import { SettingsLoginComponent } from './components/settings-login/settings-login.component';

import { SettingsRouterGuardService } from './settings-router-guard.service'

const settingsRoutes: Routes = [
    {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [SettingsRouterGuardService],
        children: [
            {'path': 'device', component: SettingsDeviceComponent},
            {'path': 'stream', component: SettingsStreamComponent},
            {'path': 'access', component: SettingsAccessComponent},
            {'path': 'login', component: SettingsLoginComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(settingsRoutes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
