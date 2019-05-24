import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { VideoViewerModule } from './video-viewer/video-viewer.module';
import { SettingsModule } from './settings/settings.module';


@NgModule({
    declarations: [
        HomeComponent,
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        SharedModule,
        VideoViewerModule,
        SettingsModule,
        AppRoutingModule
    ],
    providers: [],
    exports:[],
    bootstrap: [AppComponent]
})
export class AppModule { }
