import { Todo } from "../models/todo";

export let todos: Todo[] = [
  {
    title: "Learn Angular",
    body: "Angular is great for frontend development",
    status: "In progress",
    createdOn: new Date().toDateString(),
    uid: "jasdjas",
  },
  {
    title: "Learn React",
    body: "React is great for frontend development",
    status: "In progress",
    createdOn: new Date().toDateString(),
    uid: "jasdjas",
  },
];
