import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ToggleClassDoc } from './toggleclassdoc';
import { ImportDoc } from './importdoc';
import { StyleClassModule } from '@coduction/primeng/styleclass';
import { ButtonModule } from '@coduction/primeng/button';
import { InputTextModule } from '@coduction/primeng/inputtext';
import { AnimationDoc } from './animationdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, StyleClassModule, ButtonModule, InputTextModule],
    declarations: [ImportDoc, ToggleClassDoc, AnimationDoc],
    exports: [AppDocModule]
})
export class StyleClassDocModule {}
