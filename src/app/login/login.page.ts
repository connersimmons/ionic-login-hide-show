import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  pwdIcon = "eye-outline";
  showPwd = false;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.required],
    });
  }

  ngOnInit() {}

  togglePwd() {
    this.showPwd = !this.showPwd;
    this.pwdIcon = this.showPwd ? "eye-off-outline" : "eye-outline";
  }
}
