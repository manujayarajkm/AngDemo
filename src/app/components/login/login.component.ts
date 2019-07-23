import { Component, OnInit, Inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
})
export class LoginComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
  ) {}
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  ngOnInit() {}

  login(): void {
    const formdata = this.loginForm.value;
    const loginObj = {
      email: formdata.username,
      password: formdata.password,
    };
    this.loginService.login(loginObj).subscribe(
      data => this.checkLogin(data),
      error => {
        if (error.status === 401) {
          this.cancel();
          alert('invalid username or password');
        }
      },
    );
  }
  checkLogin(data) {
    localStorage.setItem('isLoggedIn', data.usertoken);
    this.router.navigate(['home']);
    this.cancel();
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
