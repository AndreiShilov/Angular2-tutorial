/**
 * Created by Andrei_Shilov
 */


export class TodoModel {

    constructor(public title: String = "", public status: String = "started") {
    }

    public toggle(): void {
        this.status = this.status == "started" ? "completed" : "started";
    }
}