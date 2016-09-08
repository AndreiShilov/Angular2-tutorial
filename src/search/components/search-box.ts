/**
 * Created by Andrei_Shilov
 */


import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'search-box',
    template: `
<div>
<input type="text" (input)="update.emit($event.target.value)">
</div>
`
})
export class SearchBox {
    @Output() update = new EventEmitter();

    ngOninit() {
        this.update.emit("");
    }

}
