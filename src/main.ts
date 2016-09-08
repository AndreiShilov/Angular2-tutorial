/**
 * Created by Andrei_Shilov on 9/8/2016.
 */

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from "@angular/platform-browser";
import {Component, NgModule} from "@angular/core";


@Component({
    selector: 'app',
    template: '<div>Hello from app</div>',
})
export class AppComponent {
}


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}


platformBrowserDynamic().bootstrapModule(AppModule);