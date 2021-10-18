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
  inputValue?: string;

  constructor(private _todoService: TodoService) {}

  ngOnInit() {
    let todos = this._todoService.fetchTodos();
    this.todosList = todos;
  }

  // get value from input
  getValue = (e: Event) => {
    this.inputValue = (e.target as HTMLSpanElement).textContent!;
  };

  // Event handler to handle status toggle
  handleToggleStatus = (todoTitle: string) => {
    this._todoService.toggleStatus(todoTitle);
  };

  // Event handler to handle deleting todo
  handleDeleteTodo = (todoTitle: string) => {
    const isAllowed = confirm("Are you sure?");
    if (isAllowed) {
      this._todoService.removeTodo(todoTitle);
    }
  };

  // add todo to the list
  addTodo = (todoTitle: string) => {
    const todoObj = new Todo(
      todoTitle,
      "",
      "In Progress",
      new Date().toDateString(),
      "asdasdsadas"
    );

    this._todoService.addTodo(todoObj);
  };
}
