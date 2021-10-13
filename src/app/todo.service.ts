import { Injectable } from "@angular/core";
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
  fetchTodos = () => {
    return this.todos;
  };
}
