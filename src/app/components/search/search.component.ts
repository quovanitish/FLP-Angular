import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { TodoService } from "src/app/todo.service";
import { Todo } from "../../../models/todo";
import { EndPoints } from "../../../Readonly/urlConstants";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  constructor(private todoService: TodoService, private router: Router) {}

  queryField: FormControl = new FormControl();
  queryResults?: Todo[] = [];
  endPoints: EndPoints = { login: "/login", todos: "/todos" };

  // Subscribe to change in input and search input value for available todos
  ngOnInit(): void {
    this.queryField.valueChanges
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((val) => {
        this.searchFilter(val);
      });
  }

  searchFilter = (query: string) => {
    this.todoService.search().subscribe((todosArray) => {
      const resultsArray = todosArray.filter((todoObj: Todo) => {
        if (todoObj.title.toLowerCase().includes(query) && query !== "") {
          return true;
        }
        return false;
      });
      this.queryResults = [...resultsArray];
    });
  };

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

  handleLogOut = () => {
    localStorage.setItem("isLoggedIn", JSON.stringify({ loggedIn: false }));
    this.router.navigate([this.endPoints.login]);
  };
}
