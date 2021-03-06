import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Todo } from "src/models/todo";
@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
})
export class TodoComponent implements OnInit {
  @Input()
  todoObj?: Todo;
  
  @Output()
  toggleStatus = new EventEmitter<string>();

  @Output()
  deleteTodo = new EventEmitter<string>();

  @Output()
  updateTodo = new EventEmitter<{ todoTitle: string; todoBody: string }>();

  constructor() {}

  ngOnInit(): void {}

  // Emit event to parent to handle status toggle
  handleToggleStatus = (todoTitle: string) => {
    this.toggleStatus.emit(todoTitle);
  };

  // Emit event to parent to handle deleting todo
  handleDeleteTodo = (todoTitle: string) => {
    this.deleteTodo.emit(todoTitle);
  };

  handleUpdateTodo = (todoTitle: string, todoBody: string) => {
    this.updateTodo.emit({ todoTitle, todoBody });
  };
}
