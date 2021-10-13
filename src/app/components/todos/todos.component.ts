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
  inputValue?: String;

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

  // get value from input
  getValue = (e: Event) => {
    this.inputValue = (e.target as HTMLSpanElement).textContent!;
    console.log(this.inputValue);
  };

  constructor() {}
  ngOnInit() {
    this.todosList = todos;
  }
}
