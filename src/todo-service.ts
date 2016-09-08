import {Injectable} from "@angular/core";
import {TodoModel} from "./TodoModel";

@Injectable()
export class ToDoService {
    buttonName = 'Add Todo';

    todos: TodoModel[] = [
        new TodoModel("Title1"),
        new TodoModel("Title2"),
        new TodoModel("Title3"),
        new TodoModel("Title4", "completed"),
        new TodoModel("Title5"),
        new TodoModel("Title6"),
        new TodoModel("Title7", "completed"),
        new TodoModel("Title8"),
        new TodoModel("Title9"),
        new TodoModel("Title10", "completed"),
        new TodoModel("Title11"),
        new TodoModel("Title12"),
    ];

    addTodo(todo: TodoModel) {
        this.todos = [...this.todos, todo];
    }

    toggleTodo(todo: TodoModel) {
        todo.toggle();

        const i = this.todos.indexOf(todo);

        this.todos = [...this.todos.slice(0, i), todo, ...this.todos.slice(i + 1)];
    }
}