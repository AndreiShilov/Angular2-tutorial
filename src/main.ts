/**
 * Created by Andrei_Shilov on 9/8/2016.
 */

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from "@angular/platform-browser";
import {Component, NgModule} from "@angular/core";
import {ToDoInput} from "./todo-input";
import {ToDoService} from "./todo-service";


@Component({
    selector: 'app',
    template: `<div><todo-input></todo-input></div>`,
})
export class AppComponent {
}


@NgModule({
    imports: [
        BrowserModule
    ],
    providers: [ToDoService],
    // provide('whatever', {useClass: ToDoService})
    declarations: [
        AppComponent,
        ToDoInput
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}


platformBrowserDynamic().bootstrapModule(AppModule);