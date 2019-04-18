import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    ]
})
export class SharedModule { }
