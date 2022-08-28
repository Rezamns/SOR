import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideWrapperComponent } from './slide-wrapper/slide-wrapper.component';



@NgModule({
    declarations: [
        SlideWrapperComponent
    ],
    exports: [
        SlideWrapperComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SlideWrapperModule { }
