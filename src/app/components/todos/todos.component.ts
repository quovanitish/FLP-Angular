import { Component, OnInit } from "@angular/core";
import { Todo } from "src/models/todo";
import { todos } from "../../../db/todos";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"],
})
export class TodosComponent implements OnInit {
  todosList?: Todo[];

  // Function to remove a todo from the todo list
  removeTodo = (todoTitle: string): void => {
    this.todosList = this.todosList?.filter(
      (todoObj) => todoObj.title != todoTitle
    );
  };

  //Function to change status of todo
  // Todo: Implement the logic to change status of Todo
  changeStatus = (todoTitle: string): void => {
    // Implement here...
  };

  constructor() {}
  ngOnInit() {
    this.todosList = todos;
  }
}
