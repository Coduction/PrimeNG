import { Component } from '@angular/core';
import { BaseIcon } from '@coduction/primeng/baseicon';

@Component({
    selector: 'SpinnerIcon',
    standalone: true,
    imports: [BaseIcon],
    template: ` <i class="fa fa-spin fa-rotate"></i> `
})
export class SpinnerIcon extends BaseIcon {}
