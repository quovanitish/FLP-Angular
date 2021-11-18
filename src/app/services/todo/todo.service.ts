import { Injectable } from "@angular/core";
import { Todo } from "../../../models/todo";
import { StatusType } from "../../../models/todoStatus";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { apiEndpoint } from "src/environments/environment";
import { FormatDataService } from "../formatData/format-data.service";
@Injectable({
  providedIn: "root",
})
export class TodoService {
  private todos = new BehaviorSubject<Todo[]>([]);
  broadcastTodos = this.todos.asObservable();
  constructor(
    private http: HttpClient,
    private formatService: FormatDataService
  ) {
    this.getTodos()
      .then((result) => {
        this.todos.next(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Function to remove a todo from the todo list
  removeTodo = (todoTitle: string): void => {
    let taskId;
    const filteredTodos = this.todos.value.filter((todoObj) => {
      if (todoObj.title !== todoTitle) {
        return true;
      } else {
        taskId = todoObj.uid;
        return false;
      }
    });

    this.todos.next(filteredTodos);
    this.http.delete(`${apiEndpoint}tasks/${taskId}`).subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  //Function to toggle status of todo
  toggleStatus = (todoTitle: string): void => {
    const todoList = this.todos.getValue();
    let taskId;
    let status;
    todoList.map((todoObj) => {
      if (todoObj.title === todoTitle) {
        taskId = todoObj.uid;
        todoObj.status =
          todoObj.status === StatusType.InProgress
            ? StatusType.Completed
            : StatusType.InProgress;
        status = todoObj.status;
      }
    });

    this.http
      .patch(`${apiEndpoint}tasks/${taskId}/status`, { status })
      .subscribe(
        (response) => {
          console.log(response);
        },
        (err) => {
          console.log(err);
        }
      );
    this.todos.next(todoList);
  };

  // Function to add new todo to the list
  addTodo = (newTodo: Todo): void => {
    let todoList = this.todos.getValue();
    todoList.push(newTodo);
    this.todos.next(todoList);
    this.http.post(`${apiEndpoint}tasks`, { title: newTodo.title }).subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  // make updates to todo body
  updateTodo = (todoTitle: string, todoBody: string): void => {
    let taskId;
    let todoList = this.todos.getValue();
    todoList.map((todoObj) => {
      if (todoObj.title === todoTitle) {
        todoObj.body = todoBody;
        taskId = todoObj.uid;
      }
    });
    this.todos.next(todoList);
    this.http
      .patch(`${apiEndpoint}tasks/${taskId}/desc`, { description: todoBody })
      .subscribe(
        (response) => {
          console.log(response);
        },
        (err) => {
          console.log(err);
        }
      );
  };

  // get todo from localstorage
  getTodos = (): Promise<Todo[]> => {
    return new Promise((resolve, reject) => {
      this.http.get(`${apiEndpoint}tasks`).subscribe(
        (response) => {
          resolve(this.formatService.formatTodos(response));
        },
        (err) => {
          reject(err);
        }
      );
    });
  };
}
