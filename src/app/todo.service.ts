import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Todo } from "../models/todo";
@Injectable({
  providedIn: "root",
})
export class TodoService {
  private todos: Todo[] = [
    {
      title: "Learn Angular",
      body: "Angular is great for frontend development",
      status: "In Progress",
      createdOn: new Date().toDateString(),
      uid: "jasdjas",
    },
    {
      title: "Learn React",
      body: "React is great for frontend development",
      status: "Completed",
      createdOn: new Date().toDateString(),
      uid: "jasdjas",
    },
  ];

  constructor() {}

  // fetch todo list through service
  fetchTodos = (): Observable<Todo[]> => {
    // return this.todos;
    return of(this.todos);
  };

  // Function to remove a todo from the todo list
  // Changes after deletion are not reflecting on UI
  // Todo: Need improvement
  removeTodo = (todoTitle: string): void => {
    // this.todos = this.tdos?.filter((todoObj) => todoObj.title !== todoTitle);
    console.log(this.todos);
  };

  //Function to toggle status of todo
  toggleStatus = (todoTitle: string): void => {
    this.todos?.map((todoObj) => {
      if (todoObj.title === todoTitle) {
        todoObj.status =
          todoObj.status === "In Progress" ? "Completed" : "In Progress";
      }
    });
  };
}
