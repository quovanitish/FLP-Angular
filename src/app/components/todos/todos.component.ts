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

  //Function to toggle status of todo
  toggleStatus = (todoTitle: string): void => {
    this.todosList?.map((todoObj) => {
      if (todoObj.title == todoTitle) {
        todoObj.status =
          todoObj.status == "In Progress" ? "Completed" : "In Progress";
      }
    });
  };

  constructor() {}
  ngOnInit() {
    this.todosList = todos;
  }
}
