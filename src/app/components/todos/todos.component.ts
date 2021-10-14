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

  // get value from input
  getValue = (e: Event) => {
    this.inputValue = (e.target as HTMLSpanElement).textContent!;
  };

  constructor(private _todoService: TodoService) {}

  ngOnInit() {
    this._todoService.fetchTodos().subscribe((todos) => {
      this.todosList = todos;
    });
  }

  // Event handler to handle status toggle
  handleToggleStatus = (todoTitle: string) => {
    console.log("inside comp", this.todosList);
    this._todoService.toggleStatus(todoTitle);
  };

  // Event handler to handle deleting todo
  handleDeleteTodo = (todoTitle: string) => {
    console.log("inside comp", this.todosList);
    this._todoService.removeTodo(todoTitle);
    //   this._todoService
    //     .fetchTodos()
    //     .subscribe((todos) => (this.todosList = todos));
  };

  // add todo to the list
  addTodo = (todoTitle: string) => {
    let todoObj: Todo = {
      title: todoTitle,
      body: '',
      status: "In Progress",
      createdOn: new Date().toDateString(),
      uid: "ahsbvdhaks",
    };

    console.log(todoObj);
    this._todoService.addTodo(todoObj);
  };
}
