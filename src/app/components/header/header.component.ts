import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { LoginComponent } from "../login/login.component";
import { Router, NavigationEnd } from "@angular/router";
import { RegisterComponent } from "../register/register.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.styl"]
})
export class HeaderComponent implements OnInit {
  userLoggedIn: boolean;
  constructor(private matDialog: MatDialog, private router: Router) {
    this.router.events.subscribe(data => {
      if (data instanceof NavigationEnd) {
        this.userLoggedIn = data.url === "/" ? false : true;
      }
    });
  }

  ngOnInit() {}

  login(): void {
    const dialogRef = this.matDialog.open(LoginComponent, {
      width: "250px"
    });
  }
  register(): void {
    const dialogRef = this.matDialog.open(RegisterComponent, {
      width: "250px"
    });
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate([""]);
  }
}
