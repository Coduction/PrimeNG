import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AutoCompleteModule } from '@coduction/primeng/autocomplete';
import { StyleClassModule } from '@coduction/primeng/styleclass';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuItemComponent } from './app.menuitem.component';

@NgModule({
    imports: [CommonModule, StyleClassModule, RouterModule, AutoCompleteModule],
    exports: [AppMenuComponent],
    declarations: [AppMenuComponent, AppMenuItemComponent]
})
export class AppMenuModule {}
