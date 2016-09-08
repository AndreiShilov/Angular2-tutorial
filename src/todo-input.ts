/**
 * Created by Andrei_Shilov on 9/8/2016.
 */


import {Component} from "@angular/core";

@Component({
    selector: 'todo-input',
    template: `<div>
<input type="text" #myInput>
<button (mouseover)="onClick($event, myInput.value)">Click me</button>
</div>`
})
export class ToDoInput {
    onClick(event, value) {
        console.log(event, value);
    }

}
