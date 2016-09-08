/**
 * Created by Andrei_Shilov
 */

import {Component, Input} from "@angular/core";
@Component({
    selector: 'todo-item-render',
    template: `
{{todo.title}} - {{todo.status}}
<button (click)="todo.toggle()">Change Status</button>
`
})
export class TodoItem {
    @Input() todo;
}