/**
 * Created by Andrei_Shilov
 */

import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    selector: 'todo-item-render',
    template: `
<span [ngClass]="todo.status">{{todo.title | uppercase}} </span>
<button (click)="changeStatus.emit(todo)">Change Status</button>
`
})
export class TodoItem {
    @Input() todo;
    @Output() changeStatus: EventEmitter = new EventEmitter()
}