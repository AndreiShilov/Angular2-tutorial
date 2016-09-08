/**
 * Created by Andrei_Shilov on 9/8/2016.
 */

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [AppComponent]});
    });
    it ('should work', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
});