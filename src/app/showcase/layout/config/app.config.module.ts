import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@coduction/primeng/button';
import { InputSwitchModule } from '@coduction/primeng/inputswitch';
import { RadioButtonModule } from '@coduction/primeng/radiobutton';
import { SidebarModule } from '@coduction/primeng/sidebar';
import { AppConfigComponent } from './app.config.component';

@NgModule({
    imports: [CommonModule, FormsModule, SidebarModule, InputSwitchModule, ButtonModule, RadioButtonModule],
    exports: [AppConfigComponent],
    declarations: [AppConfigComponent]
})
export class AppConfigModule {}
