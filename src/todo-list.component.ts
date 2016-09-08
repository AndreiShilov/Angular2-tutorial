/**
 * Created by Andrei_Shilov on 9/8/2016.
 */
import {Component, Inject} from "@angular/core";
import {ToDoService} from "./todo-service";


@Component({
    selector: 'todo-list',
    template: `<div>

<ul>
<li *ngFor="let todo of todoService.todos">
<todo-item-render [todo]="todo" ></todo-item-render>
</li>
</ul>
</div>`
})
export class TodoList {

    constructor(@Inject(ToDoService) public todoService) {

    }

}
