import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@coduction/primeng/button';
import { CheckboxModule } from '@coduction/primeng/checkbox';
import { InputTextModule } from '@coduction/primeng/inputtext';
import { RadioButtonModule } from '@coduction/primeng/radiobutton';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDoc } from './basicdoc';
import { ButtonDoc } from './buttondoc';
import { CheckboxDoc } from './checkboxdoc';
import { ImportDoc } from './importdoc';
import { MultipleDoc } from './multipledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, InputTextModule, ButtonModule, CheckboxModule, RadioButtonModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, MultipleDoc, ButtonDoc, CheckboxDoc]
})
export class InputGroupDocModule {}
