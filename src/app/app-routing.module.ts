import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { TodosComponent } from "./components/todos/todos.component";

const routes: Routes = [
  { path: "login", component: LoginFormComponent },
  { path: "todos", component: TodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
