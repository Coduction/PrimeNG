import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule } from '@coduction/primeng/confirmdialog';
import { ButtonModule } from '@coduction/primeng/button';
import { ToastModule } from '@coduction/primeng/toast';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { PositionDoc } from './positiondoc';
import { TemplateDoc } from './templatedoc';
import { AccessibilityDoc } from './accessibilitydoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, ConfirmDialogModule, ButtonModule, ToastModule, AppDocModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, PositionDoc, TemplateDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class ConfirmDialogDocModule {}
