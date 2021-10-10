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
  constructor() {}
  ngOnInit() {
    this.todosList = todos;
  }
}
