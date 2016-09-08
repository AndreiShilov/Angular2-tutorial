/**
 * Created by Andrei_Shilov on 9/8/2016.
 */


import {Component, Inject} from "@angular/core";
import {ToDoService} from "./todo-service";

@Component({
    selector: 'todo-input',
    template: `<div>
<form (submit)="onSubmit()" name="todo">
<input type="text" [(ngModel)]="task" name="task"/>
</form>
</div>`
})
export class ToDoInput {
    public task;
    onSubmit() {
        this.todoService.todos.push(this.task);
        console.log(this.todoService.todos);
    }

    private label: String;

    constructor(@Inject(ToDoService) public todoService) {
        this.label = todoService.buttonName;
    }

}
