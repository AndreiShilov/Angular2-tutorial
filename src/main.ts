/**
 * Created by Andrei_Shilov on 9/8/2016.
 */

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from "@angular/platform-browser";
import {Component, NgModule} from "@angular/core";
import {ToDoInput} from "./todo-input.component";
import {ToDoService} from "./todo-service";
import {TodoList} from "./todo-list.component";
import {FormsModule} from "@angular/forms";
import {TodoItem} from "./todo-item-render";
import {SearchPipe} from "./search-pipe";


@Component({
    selector: 'app',
    template: `<div>
<todo-input></todo-input>
<todo-list></todo-list>
</div>`,
})
export class AppComponent {
}


@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [ToDoService],
    // provide('whatever', {useClass: ToDoService})
    declarations: [
        AppComponent,
        ToDoInput,
        TodoList,
        TodoItem,
        SearchPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}


platformBrowserDynamic().bootstrapModule(AppModule);