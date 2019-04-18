import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
    declarations: [
        HomeComponent,
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule
    ],
    providers: [],
    exports:[],
    bootstrap: [AppComponent]
})
export class AppModule { }
