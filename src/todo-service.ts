import {Injectable} from "@angular/core";
import {TodoModel} from "./TodoModel";

@Injectable()
export class ToDoService {
    buttonName = 'Add Todo';

    todos: TodoModel[] = [
        new TodoModel("Title1"),
        new TodoModel("Title2"),
        new TodoModel("Title3"),
        new TodoModel("Title4"),
    ];

    addTodo(todo: TodoModel) {
        this.todos = [...this.todos, todo];
    }
}