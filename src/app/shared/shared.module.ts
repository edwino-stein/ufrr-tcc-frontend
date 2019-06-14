import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StreamService } from './services/stream.service'
import { AuthService } from './services/auth.service'

import { LoginComponent } from './components/login/login.component';
import { VAlignDirective, VAlignParentDirective } from './directives/v-align.directive';

@NgModule({
    declarations: [
        VAlignDirective,
        VAlignParentDirective,
        LoginComponent
    ],
    exports: [
        VAlignDirective,
        VAlignParentDirective,
        LoginComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    providers:[
        StreamService,
        AuthService
    ]
})
export class SharedModule { }
