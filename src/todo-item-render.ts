/**
 * Created by Andrei_Shilov
 */

import {Component, Input} from "@angular/core";
@Component({
    selector: 'todo-item-render',
    // styles: ['.completed { display: none}'],
    template: `
<style>
.completed{
text-decoration: line-through;
}
</style>
<span [ngClass]="todo.status">{{todo.title | uppercase}} </span>
<!--<span [ngClass]="todo.status">{{todo.title | uppercase}} </span>-->
<button (click)="todo.toggle()">Change Status</button>
`
})
export class TodoItem {
    @Input() todo;
}