import { Injectable } from "@angular/core";
import { Observable, of, from } from "rxjs";
import { Todo } from "../models/todo";

enum StatusType {
  Completed = "Completed",
  InProgress = "In Progress",
}
@Injectable({
  providedIn: "root",
})
export class TodoService {
  private todos: Todo[] = [
    {
      title: "Learn Angular",
      body: "Angular is great for frontend development",
      status: StatusType.InProgress,
      createdOn: new Date().toDateString(),
      uid: "jasdjas",
    },
    {
      title: "Learn React",
      body: "React is great for frontend development",
      status: StatusType.Completed,
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
    this.todos = this.todos?.filter((todoObj) => todoObj.title !== todoTitle);
    console.log("service comp", this.todos);
  };

  //Function to toggle status of todo
  toggleStatus = (todoTitle: string): void => {
    this.todos?.map((todoObj) => {
      if (todoObj.title === todoTitle) {
        todoObj.status =
          todoObj.status === StatusType.InProgress
            ? StatusType.Completed
            : StatusType.InProgress;
      }
    });
    console.log("service comp", this.todos);
  };

  // Function to add new todo to the list
  addTodo = (newTodo: Todo): void => {
    this.todos.push(newTodo);
  };
}
