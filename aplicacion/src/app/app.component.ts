import { Component } from '@angular/core';
import {GLOBAL} from "./services/global";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title = 'Productos Angular 4';
    public header_color;

    constructor() {
    }
}
