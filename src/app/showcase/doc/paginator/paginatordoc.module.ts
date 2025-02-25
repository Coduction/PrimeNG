import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@coduction/primeng/button';
import { DividerModule } from '@coduction/primeng/divider';
import { DropdownModule } from '@coduction/primeng/dropdown';
import { PaginatorModule } from '@coduction/primeng/paginator';
import { SliderModule } from '@coduction/primeng/slider';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImagesDoc } from './imagesdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, PaginatorModule, ButtonModule, DividerModule, SliderModule, RouterModule, DropdownModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, TemplateDoc, ImagesDoc, StyleDoc, AccessibilityDoc]
})
export class PaginatorDocModule {}
