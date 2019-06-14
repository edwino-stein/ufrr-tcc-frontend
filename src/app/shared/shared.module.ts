import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamService } from './services/stream.service'
import { AuthService } from './services/auth.service'

import { VAlignDirective, VAlignParentDirective } from './directives/v-align.directive';

@NgModule({
    declarations: [
        VAlignDirective,
        VAlignParentDirective
    ],
    exports: [
        VAlignDirective,
        VAlignParentDirective
    ],
    imports: [
        CommonModule
    ],
    providers:[
        StreamService,
        AuthService
    ]
})
export class SharedModule { }
