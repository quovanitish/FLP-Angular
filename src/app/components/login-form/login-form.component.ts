import { Component, OnInit } from "@angular/core";
import { Login } from "../../../models/userLogin";
import { Router } from "@angular/router";
import { TodoService } from "../../services/todo/todo.service";
import { EndPoints } from "../../../Readonly/urlConstants";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private router: Router,
    private todoService: TodoService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  user = new Login("", "");
  endPoints: EndPoints = { login: "/login", todos: "/todos" };

  // event handler for form submit
  onSubmit(userLoginObj: Login) {
    this.auth.login(userLoginObj).subscribe(
      (response) => {
        localStorage.setItem("token", response.token);
        this.router.navigate([this.endPoints.todos]);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
