/**
 * Created by Andrei_Shilov
 */


export class TodoModel {
    status: String = 'started';

    constructor(public title: String = "") {
    }

    public toggle(): void {
        this.status = this.status == "started" ? "completed" : "started";
    }
}