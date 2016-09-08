/**
 * Created by Andrei_Shilov on 9/8/2016.
 */


import {Component} from "@angular/core";
import {ToDoService} from "./todo-service";

@Component({
    selector: 'todo-input',
    template: `<div>
<input type="text" #myInput>
<button (click)="onClick(myInput.value)">{{label}}</button>
</div>`
})
export class ToDoInput {
    onClick(value) {
        this.todoService.todos.push(value);
        console.log(this.todoService.todos);
    }

    private label: String;

    constructor(public todoService: ToDoService) {
        this.label = todoService.buttonName;
    }

}
