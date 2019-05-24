import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { SettingsDeviceComponent } from './components/settings-device/settings-device.component';
import { SettingsStreamComponent } from './components/settings-stream/settings-stream.component';
import { SettingsAccessComponent } from './components/settings-access/settings-access.component';

const settingsRoutes: Routes = [
    {
        path: 'settings',
        component: SettingsComponent,
        children: [
            {'path': 'device', component: SettingsDeviceComponent},
            {'path': 'stream', component: SettingsStreamComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(settingsRoutes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
