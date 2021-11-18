import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Login } from "src/models/userLogin";
import { Observable } from "rxjs";
import { apiEndpoint } from "../../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  isLoggedIn() {
    return !!localStorage.getItem("token");
  }

  login(data: Login): Observable<any> {
    return this.http.post(`${apiEndpoint}users/login`, data);
  }

  logout(): Observable<any> {
    return this.http.post(`${apiEndpoint}users/logout`, {});
  }
}
