import { Injectable } from "@angular/core";
import { Todo } from "../../../models/todo";
import { StatusType } from "../../../models/todoStatus";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class TodoService {
  private todos = new BehaviorSubject<Todo[]>([]);
  broadcastTodos = this.todos.asObservable();
  constructor() {
    this.todos.next(this.getTodos());
  }

  // Function to remove a todo from the todo list
  removeTodo = (todoTitle: string): void => {
    const filteredTodos = this.todos.value.filter(
      (todoObj) => todoObj.title !== todoTitle
    );
    this.todos.next(filteredTodos);
    this.setTodos(filteredTodos);
  };

  //Function to toggle status of todo
  toggleStatus = (todoTitle: string): void => {
    const todoList = this.todos.getValue();
    todoList.map((todoObj) => {
      if (todoObj.title === todoTitle) {
        todoObj.status =
          todoObj.status === StatusType.InProgress
            ? StatusType.Completed
            : StatusType.InProgress;
      }
    });
    this.todos.next(todoList);
    this.setTodos(todoList);
  };

  // Function to add new todo to the list
  addTodo = (newTodo: Todo): void => {
    let todoList = this.todos.getValue();
    todoList.push(newTodo);
    this.todos.next(todoList);
    this.setTodos(todoList);
  };

  // make updates to todo body
  updateTodo = (todoTitle: string, todoBody: string): void => {
    let todoList = this.todos.getValue();
    todoList.map((todoObj) => {
      if (todoObj.title === todoTitle) {
        todoObj.body = todoBody;
      }
    });
    this.todos.next(todoList);
    this.setTodos(todoList);
  };

  /*Local Storage functions*/
  // get todo from localstorage
  getTodos = (): Todo[] => {
    let localStorageItem = JSON.parse(localStorage.getItem("todos")!);
    return localStorageItem == null ? [] : localStorageItem.todos;
  };

  // set new todo list to localstorage
  private setTodos = (todos: Todo[]): void => {
    localStorage.setItem("todos", JSON.stringify({ todos: todos }));
  };
}
