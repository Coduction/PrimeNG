import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { VirtualScrollerModule } from '@coduction/primeng/virtualscroller';
import { ImportDoc } from './/importdoc';
import { BasicDoc } from './basicdoc';
import { LazyLoadDoc } from './lazyloaddoc';
import { StyleDoc } from './styledoc';
import { RouterModule } from '@angular/router';
import { ProgrammaticScrollDoc } from './programmaticscrolldoc';
import { ButtonModule } from '@coduction/primeng/button';
import { TemplateDoc } from './templatedoc';
import { SkeletonModule } from '@coduction/primeng/skeleton';
import { AccessibilityDoc } from './accessibilitydoc';
import { TagModule } from '@coduction/primeng/tag';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, RouterModule, VirtualScrollerModule, ButtonModule, SkeletonModule, TagModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, LazyLoadDoc, StyleDoc, ProgrammaticScrollDoc, TemplateDoc, ProgrammaticScrollDoc, AccessibilityDoc]
})
export class VirtualScrollerDocModule {}
