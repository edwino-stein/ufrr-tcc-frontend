import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SettingsComponent } from './settings.component';
import { SettingsNavbarComponent } from './components/settings-navbar/settings-navbar.component';
import { SettingsPageContentComponent } from './components/settings-page-content/settings-page-content.component';

@NgModule({
  declarations: [
      SettingsComponent,
      SettingsNavbarComponent,
      SettingsPageContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
