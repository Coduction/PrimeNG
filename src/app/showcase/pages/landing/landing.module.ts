import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BadgeModule } from '@coduction/primeng/badge';
import { ButtonModule } from '@coduction/primeng/button';
import { CalendarModule } from '@coduction/primeng/calendar';
import { ChartModule } from '@coduction/primeng/chart';
import { CheckboxModule } from '@coduction/primeng/checkbox';
import { ChipModule } from '@coduction/primeng/chip';
import { DropdownModule } from '@coduction/primeng/dropdown';
import { InputNumberModule } from '@coduction/primeng/inputnumber';
import { InputSwitchModule } from '@coduction/primeng/inputswitch';
import { ListboxModule } from '@coduction/primeng/listbox';
import { ProgressBarModule } from '@coduction/primeng/progressbar';
import { RadioButtonModule } from '@coduction/primeng/radiobutton';
import { SelectButtonModule } from '@coduction/primeng/selectbutton';
import { SidebarModule } from '@coduction/primeng/sidebar';
import { SliderModule } from '@coduction/primeng/slider';
import { TableModule } from '@coduction/primeng/table';
import { TabMenuModule } from '@coduction/primeng/tabmenu';
import { TreeModule } from '@coduction/primeng/tree';
import { AppNewsModule } from '../../layout/news/app.news.module';
import { LandingComponent } from './landing.component';

@NgModule({
    imports: [
        CommonModule,
        NgOptimizedImage,
        FormsModule,
        SidebarModule,
        InputSwitchModule,
        ButtonModule,
        RadioButtonModule,
        InputNumberModule,
        TabMenuModule,
        ChartModule,
        ProgressBarModule,
        TreeModule,
        ChipModule,
        SelectButtonModule,
        SliderModule,
        BadgeModule,
        CalendarModule,
        TableModule,
        DropdownModule,
        ListboxModule,
        RouterModule,
        CheckboxModule,
        AppNewsModule
    ],
    exports: [LandingComponent],
    declarations: [LandingComponent]
})
export class LandingModule {}
