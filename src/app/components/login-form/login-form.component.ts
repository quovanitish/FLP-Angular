import { Component, OnInit } from "@angular/core";
import { Login } from "../../../models/userLogin";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  user = new Login("", "");

  // event handler for form submit
  onSubmit(userLoginObj: object) {
    console.warn(userLoginObj);
    this.router.navigate(["/todos"]);
  }
}
