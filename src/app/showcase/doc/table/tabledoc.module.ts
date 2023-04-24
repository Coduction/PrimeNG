import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@coduction/primeng/button';
import { CalendarModule } from '@coduction/primeng/calendar';
import { ConfirmDialogModule } from '@coduction/primeng/confirmdialog';
import { ContextMenuModule } from '@coduction/primeng/contextmenu';
import { DialogModule } from '@coduction/primeng/dialog';
import { DropdownModule } from '@coduction/primeng/dropdown';
import { FileUploadModule } from '@coduction/primeng/fileupload';
import { SelectButtonModule } from '@coduction/primeng/selectbutton';
import { InputSwitchModule } from '@coduction/primeng/inputswitch';
import { InputNumberModule } from '@coduction/primeng/inputnumber';
import { InputTextModule } from '@coduction/primeng/inputtext';
import { InputTextareaModule } from '@coduction/primeng/inputtextarea';
import { MultiSelectModule } from '@coduction/primeng/multiselect';
import { ProgressBarModule } from '@coduction/primeng/progressbar';
import { RadioButtonModule } from '@coduction/primeng/radiobutton';
import { RatingModule } from '@coduction/primeng/rating';
import { SkeletonModule } from '@coduction/primeng/skeleton';
import { SliderModule } from '@coduction/primeng/slider';
import { TableModule } from '@coduction/primeng/table';
import { TabViewModule } from '@coduction/primeng/tabview';
import { TagModule } from '@coduction/primeng/tag';
import { ToastModule } from '@coduction/primeng/toast';
import { ToggleButtonModule } from '@coduction/primeng/togglebutton';
import { ToolbarModule } from '@coduction/primeng/toolbar';
import { TooltipModule } from '@coduction/primeng/tooltip';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { ContextMenuDoc } from './contextmenudoc';
import { BasicDoc } from './basicdoc';
import { CellEditDoc } from './celleditdoc';
import { CheckboxSelectionDoc } from './checkboxselectiondoc';
import { ColumnGroupDoc } from './columngroupdoc';
import { ColumnResizeExpandModeDoc } from './columnresizeexpandmodedoc';
import { ColumnResizeScrollableModeDoc } from './columnresizescrollablemodedoc';
import { ColumnSelectionDoc } from './columnselectiondoc';
import { ColumnToggleDoc } from './columntoggledoc';
import { ControlledSelectionDoc } from './controlledselectiondoc';
import { CustomersDoc } from './customersdoc';
import { CustomSortDoc } from './customsortdoc';
import { DynamicDoc } from './dynamicdoc';
import { ExpandableRowGroupDoc } from './expandablerowgroupdoc';
import { ExportDoc } from './exportdoc';
import { FilterMenuDoc } from './filtermenudoc';
import { FilterRowDoc } from './filterrowdoc';
import { FlexibleScrollDoc } from './flexiblescrolldoc';
import { FrozenColumnsDoc } from './frozencolumnsdoc';
import { FrozenRowsDoc } from './frozenrowsdoc';
import { GridlinesDoc } from './gridlinesdoc';
import { ImportDoc } from './importdoc';
import { HorizontalAndVerticalScrollDoc } from './horizontalandverticaldoc';
import { LazyLoadDoc } from './lazyloaddoc';
import { MultipleSelectionDoc } from './multipleselectiondoc';
import { PageOnlySelectionDoc } from './pageonlyselectiondoc';
import { PaginatorBasicDoc } from './paginatorbasicdoc';
import { PaginatorProgrammaticDoc } from './paginatorprogrammaticdoc';
import { ProductsDoc } from './productsdoc';
import { RadioButtonSelectionDoc } from './radiobuttonselectiondoc';
import { ReorderDoc } from './reorderdoc';
import { ResponsiveScrollDoc } from './responsivescrolldoc';
import { ResponsiveStackDoc } from './responsivestackdoc';
import { RowEditDoc } from './roweditdoc';
import { RowExpandDoc } from './rowexpanddoc';
import { RowspanGroupingDoc } from './rowspangroupingdoc';
import { SingleColumnSortDoc } from './singlecolumnsortdoc';
import { SingleSelectionDoc } from './singleselectiondoc';
import { SizeDoc } from './sizedoc';
import { StatefulDoc } from './statefuldoc';
import { StripedDoc } from './stripeddoc';
import { StyleDoc } from './styledoc';
import { SubheaderGroupingDoc } from './subheadergroupingdoc';
import { TemplateDoc } from './templatedoc';
import { VerticalScrollDoc } from './verticalscrolldoc';
import { VirtualScrollDoc } from './virtualscrolldoc';
import { VirtualScrollLazyDoc } from './virtualscrolllazydoc';
import { ColumnResizeFitModeDoc } from './columnresizefitmodedoc';
import { PropsDoc } from './propsdoc';
import { EventsDoc } from './eventsdoc';
import { StylingDoc } from './stylingdoc';
import { MethodsDoc } from './methodsdoc';
import { TemplatesDoc } from './templatesdoc';
import { SelectionEventsDoc } from './selectioneventsdoc';
import { AccessibilityDoc } from './accessibilitydoc';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        CalendarModule,
        SliderModule,
        DialogModule,
        ConfirmDialogModule,
        MultiSelectModule,
        ContextMenuModule,
        DropdownModule,
        ButtonModule,
        TagModule,
        ToastModule,
        InputTextModule,
        InputSwitchModule,
        InputNumberModule,
        InputTextareaModule,
        ProgressBarModule,
        TooltipModule,
        RadioButtonModule,
        ToolbarModule,
        FileUploadModule,
        TabViewModule,
        ToggleButtonModule,
        RatingModule,
        SkeletonModule,
        SelectButtonModule,
        AppCodeModule,
        AppDocModule
    ],
    declarations: [
        ImportDoc,
        BasicDoc,
        DynamicDoc,
        CellEditDoc,
        CheckboxSelectionDoc,
        ColumnGroupDoc,
        ColumnResizeExpandModeDoc,
        ColumnResizeScrollableModeDoc,
        ColumnResizeFitModeDoc,
        ColumnSelectionDoc,
        ColumnToggleDoc,
        ContextMenuDoc,
        ControlledSelectionDoc,
        CustomersDoc,
        CustomSortDoc,
        DynamicDoc,
        ExpandableRowGroupDoc,
        ExportDoc,
        FilterMenuDoc,
        FilterRowDoc,
        FlexibleScrollDoc,
        FrozenColumnsDoc,
        FrozenRowsDoc,
        GridlinesDoc,
        HorizontalAndVerticalScrollDoc,
        LazyLoadDoc,
        MultipleSelectionDoc,
        PageOnlySelectionDoc,
        PaginatorBasicDoc,
        MultipleSelectionDoc,
        PageOnlySelectionDoc,
        PaginatorProgrammaticDoc,
        ProductsDoc,
        RadioButtonSelectionDoc,
        ReorderDoc,
        ResponsiveScrollDoc,
        ResponsiveStackDoc,
        RowEditDoc,
        RowExpandDoc,
        RowspanGroupingDoc,
        SingleColumnSortDoc,
        SingleSelectionDoc,
        SizeDoc,
        StatefulDoc,
        StripedDoc,
        StyleDoc,
        SubheaderGroupingDoc,
        TemplateDoc,
        VerticalScrollDoc,
        VirtualScrollDoc,
        VirtualScrollLazyDoc,
        PropsDoc,
        EventsDoc,
        StylingDoc,
        MethodsDoc,
        TemplatesDoc,
        SelectionEventsDoc,
        AccessibilityDoc
    ],
    exports: [AppDocModule]
})
export class TableDocModule {}
