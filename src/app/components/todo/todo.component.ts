import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
})
export class TodoComponent implements OnInit {
  @Input()
  todoTitle?: string;
  @Input()
  todoBody?: string;
  @Input()
  todoStatus?: string;
  @Input()
  todoCreatedOn?: string;
  @Input()
  todoUID?: string;
  @Input()
  removeTodo!: (uid: string) => void;
  @Input()
  toggleStatus!: (uid: string) => void;

  constructor() {}

  ngOnInit(): void {}
}
