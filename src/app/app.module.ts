import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { TodosComponent } from "./components/todos/todos.component";
import { TodoComponent } from "./components/todo/todo.component";
import { TodoService } from "./todo.service";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { SearchComponent } from "./components/search/search.component";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    LoginFormComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
