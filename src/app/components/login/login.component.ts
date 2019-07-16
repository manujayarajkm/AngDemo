import { Component, OnInit, Inject } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Router } from "@angular/router";

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.styl"]
})
export class LoginComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private router: Router,
    private fb: FormBuilder
  ) {}
  loginForm = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });
  ngOnInit() {}

  login(): void {
    const formdata = this.loginForm.value;
    if (formdata.username == "manu" && formdata.password == "manu") {
      localStorage.setItem("isLoggedIn", "true");
      this.router.navigate(["home"]);
      this.cancel();
    } else {
      this.cancel();
      alert("invalid username or password");
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
