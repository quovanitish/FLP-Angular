import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { TodoService } from "src/app/todo.service";
import { Todo } from "../../../models/todo";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  queryField: FormControl = new FormControl();
  queryResults?: Todo[] = [];

  // Subscribe to change in input and search input value for available todos
  ngOnInit(): void {
    this.queryField.valueChanges
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((val) =>
        this.todoService.search().subscribe((todoArray) => {
          const resultsArray = todoArray.map((todoObj: Todo) => {
            if (todoObj.title.toLowerCase().includes(val) && val !== "") {
              return todoObj;
            }
            return new Todo("", "", "", "", "");
          });
          this.queryResults = [...resultsArray];
        })
      );
  }

  handleToggleStatus = (todoTitle: string) => {
    this.todoService.toggleStatus(todoTitle);
  };

  handleDeleteTodo = (todoTitle: string) => {
    const isAllowed = confirm("Are you sure?");
    if (isAllowed) {
      this.todoService.removeTodo(todoTitle);
    }
  };

  handleUpdateTodo = (updateObj: any) => {
    this.todoService.updateTodo(updateObj.todoTitle, updateObj.todoBody);
  };
}