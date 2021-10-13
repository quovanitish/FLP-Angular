import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
})
export class TodoComponent implements OnInit {
  @Input()
  todoObj?: {
    title: string;
    body: string;
    status: string;
    createdOn: string;
    uid: string;
  };

  @Output()
  toggleStatus = new EventEmitter<string>();

  @Output()
  deleteTodo = new EventEmitter<string>();

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
}
