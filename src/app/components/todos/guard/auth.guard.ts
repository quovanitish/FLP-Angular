import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let userLoggedInItem = JSON.parse(localStorage.getItem("isLoggedIn")!);

    if (userLoggedInItem === null) {
      this.router.navigate(["/login"]);
      return false;
    } else {
      return userLoggedInItem.loggedIn === false
        ? this.router.navigate(["/login"])
        : true;
    }
  }
}
