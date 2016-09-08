/**
 * Created by Andrei_Shilov on 9/8/2016.
 */


import {Component, Inject} from "@angular/core";
import {ToDoService} from "./todo-service";
import {TodoModel} from "./TodoModel";

@Component({
    selector: 'todo-input',
    template: `<div>
<form (submit)="onSubmit()" name="todo">
<input type="text" [(ngModel)]="todoModel.title" name="task"/>
</form>
</div>`
})
export class ToDoInput {
    public todoModel:TodoModel = new TodoModel();
    onSubmit() {
        this.todoService.addTodo(this.todoModel);
        console.log(this.todoService.todos);
        this.todoModel = new TodoModel();
    }


    private label: String;

    constructor(@Inject(ToDoService) public todoService) {
        this.label = todoService.buttonName;
    }

}
