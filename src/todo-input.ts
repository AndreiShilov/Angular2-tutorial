/**
 * Created by Andrei_Shilov on 9/8/2016.
 */


import {Component} from "@angular/core";

@Component({
    selector: 'todo-input',
    template: `<div>
<input type="text" #myInput>
<button (click)="onClick(myInput.value)">Click me</button>
</div>`
})
export class ToDoInput {
    onClick(value) {
        console.log(value);
    }

}
