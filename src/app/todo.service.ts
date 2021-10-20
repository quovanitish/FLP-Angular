import { Injectable } from "@angular/core";
import { Todo } from "../models/todo";
import { StatusType } from "../models/todoStatus";
import { of, Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class TodoService {
  constructor() {}

  // Function to remove a todo from the todo list
  removeTodo = (todoTitle: string): void => {
    let localStorageTodos = this.getTodos();
    localStorageTodos = localStorageTodos.filter(
      (todoObj) => todoObj.title !== todoTitle
    );

    this.setTodos(localStorageTodos);
  };

  //Function to toggle status of todo
  toggleStatus = (todoTitle: string): void => {
    let localStorageTodos = this.getTodos();
    localStorageTodos.map((todoObj) => {
      if (todoObj.title === todoTitle) {
        todoObj.status =
          todoObj.status === StatusType.InProgress
            ? StatusType.Completed
            : StatusType.InProgress;
      }
    });

    this.setTodos(localStorageTodos);
  };

  // Function to add new todo to the list
  addTodo = (newTodo: Todo): void => {
    let localStorageTodos = this.getTodos();
    localStorageTodos.push(newTodo);
    this.setTodos(localStorageTodos);
  };

  /*Local Storage functions*/
  // get todo from localstorage
  getTodos = (): Todo[] => {
    let localStorageItem = JSON.parse(localStorage.getItem("todos")!);
    return localStorageItem == null ? [] : localStorageItem.todos;
  };

  // make updates to todo body
  updateTodo = (todoTitle: string, todoBody: string): void => {
    let localStorageTodos = this.getTodos();
    localStorageTodos.map((todoObj) => {
      if (todoObj.title === todoTitle) {
        todoObj.body = todoBody;
      }
    });

    this.setTodos(localStorageTodos);
  };

  // set new todo list to localstorage
  private setTodos = (todos: Todo[]): void => {
    localStorage.setItem("todos", JSON.stringify({ todos: todos }));
  };

  // Todos array observable to subscribe listen changes
  search = (): Observable<Todo[]> => {
    const todos = this.getTodos();
    return of(todos);
  };
}
