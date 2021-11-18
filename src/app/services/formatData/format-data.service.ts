import { Injectable } from "@angular/core";
import { Todo } from "src/models/todo";

@Injectable({
  providedIn: "root",
})
export class FormatDataService {
  constructor() {}

  formatTodos(response: any): Todo[] {
    const result: Todo[] = response.map((todoObj: any) => {
      return {
        title: todoObj.title,
        body: todoObj.description,
        status: todoObj.status,
        createdOn: todoObj.createdOn,
        uid: todoObj._id,
        owner: todoObj.owner,
      };
    });

    return result;
  }
}
