import { Component, OnInit } from "@angular/core";
import { Login } from "../../../models/userLogin";
import { Router } from "@angular/router";
import { TodoService } from "src/app/todo.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  constructor(private router: Router, private todoService: TodoService) {}

  ngOnInit(): void {}
  
  user = new Login("", "");
  
  // event handler for form submit
  onSubmit(userLoginObj: object) {
    localStorage.setItem("isLoggedIn", JSON.stringify({loggedIn: true}))
    this.router.navigate(["/todos"]);
  }
}