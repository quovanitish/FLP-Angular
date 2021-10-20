import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { TodosComponent } from "./components/todos/todos.component";
import { TodoComponent } from "./components/todo/todo.component";
import { TodoService } from "./todo.service";
import { LoginFormComponent } from "./components/login-form/login-form.component";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    LoginFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
