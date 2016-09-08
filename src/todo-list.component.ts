/**
 * Created by Andrei_Shilov on 9/8/2016.
 */
import {Component, Inject, Input} from "@angular/core";
import {ToDoService} from "./todo-service";


@Component({
    selector: 'todo-list',
    template: `<div>

<ul>
<li *ngFor="let todo of todoService.todos | started : status">
<todo-item-render [todo]="todo"
 (changeStatus)="todoService.toggleTodo($event)"></todo-item-render>
</li>
</ul>
</div>`
})
export class TodoList {
    @Input() status;

    constructor(@Inject(ToDoService) public todoService) {

    }

}
