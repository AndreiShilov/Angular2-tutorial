/**
 * Created by Andrei_Shilov
 */


import {Component, Output, EventEmitter} from "@angular/core";
@Component({
    selector: 'status-selector',
    template: `
<div>
    <select (change)="select.emit($event.target.value)">
    <option *ngFor="let status of statuses" value="{{status}}">{{status}}</option>
</select>
</div>
`

})
export class StatusSelector {
    @Output() select = new EventEmitter();
    statuses = ["started", "completed"];

    ngOnInit() {
        this.select.emit(this.statuses[0]);
    }
}