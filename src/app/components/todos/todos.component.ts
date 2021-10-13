import { Component, OnInit } from "@angular/core";
import { TodoService } from "src/app/todo.service";
import { Todo } from "src/models/todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"],
})
export class TodosComponent implements OnInit {
  todosList?: Todo[];
  inputValue?: String;

  // get value from input
  getValue = (e: Event) => {
    this.inputValue = (e.target as HTMLSpanElement).textContent!;
    console.log(this.inputValue);
  };

  constructor(private _todoService: TodoService) {}

  ngOnInit() {
    this._todoService
      .fetchTodos()
      .subscribe((todos) => (this.todosList = todos));
  }

  // Event handler to handle status toggle
  handleToggleStatus = (todoTitle: string) => {
    this._todoService.toggleStatus(todoTitle);
  };

  // Event handler to handle deleting todo
  handleDeleteTodo = (todoTitle: string) => {
    this._todoService.removeTodo(todoTitle);
  };
}
