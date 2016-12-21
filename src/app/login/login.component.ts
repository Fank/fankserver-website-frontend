import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public auth: AuthService, private _fb: FormBuilder) {
    this.loginForm = this._fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit() {}

  doLogin() {
    if (this.loginForm.valid) {
      this.auth.post('/auth/login', this.loginForm.value).subscribe(
        (res) => {
          this.auth.setJWT(res.text());
        },
        (err) => console.error(err)
      );
    }
  }
}
