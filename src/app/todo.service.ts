import { Injectable } from "@angular/core";
import { Todo } from "../models/todo";
import { StatusType } from "../models/todoStatus";
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
  fetchTodos = (): Todo[] => {
    return this.todos;
  };

  // Function to remove a todo from the todo list
  removeTodo = (todoTitle: string): void => {
    const filteredTodos = this.todos?.filter(
      (todoObj) => todoObj.title !== todoTitle
    );
    this.todos = [...filteredTodos];
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
  };

  // Function to add new todo to the list
  addTodo = (newTodo: Todo): void => {
    this.todos.push(newTodo);
  };
}
