import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@coduction/primeng/button';
import { InputTextModule } from '@coduction/primeng/inputtext';
import { DropdownModule } from '@coduction/primeng/dropdown';
import { FocusTrapModule } from '@coduction/primeng/focustrap';
import { ImportDoc } from './importdoc';
import { BasicDoc } from './basicdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, ButtonModule, InputTextModule, DropdownModule, FocusTrapModule],
    declarations: [ImportDoc, BasicDoc],
    exports: [AppDocModule]
})
export class FocusTrapDocModule {}
