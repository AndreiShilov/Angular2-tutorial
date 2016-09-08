/**
 * Created by Andrei_Shilov on 9/8/2016.
 */

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from "@angular/platform-browser";
import {Component, NgModule} from "@angular/core";
import {ToDoInput} from "./todo/todo-input.component";
import {SearchBox} from "./search/components/search-box";
import {ToDoService} from "./todo/todo-service";
import {TodoList} from "./todo/todo-list.component";
import {FormsModule} from "@angular/forms";
import {TodoItem} from "./todo/todo-item-render";
import {SearchPipe} from "./search/pipes/search-pipe";
import {StartedPipe} from "./started-pipe";
import {StatusSelector} from "./status-selector";



@Component({
    selector: 'app',
    template: `<div>
<todo-input></todo-input>
<status-selector (select)="status = $event"></status-selector>
<search-box (update)="term = $event"></search-box>
<todo-list [status]="status" [term]="term"></todo-list>
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
        SearchBox,
        TodoList,
        TodoItem,
        SearchPipe,
        StartedPipe,
        StatusSelector
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
