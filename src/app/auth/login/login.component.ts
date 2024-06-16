import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../Service/Login/login.service";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {parseJson} from "@angular/cli/src/utilities/json-file";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  form!: FormGroup;


  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = '#000000';

    this.creataForm();
  }

  creataForm() {
    this.form = this.loginService.loginForm;
  }

  OnSubmit() {
    let objet = {
      "username": this.form.value.username,
      "password": this.form.value.password
    }
    console.log(JSON.parse(JSON.stringify(objet)));
    setTimeout(
() => {
      this.loginService.login(JSON.parse(JSON.stringify(objet))).subscribe(
        (res: any) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/client']);
        },
        (error: any) => {
          console.log(error);
        }
      );
      }, 2000
    )

  }
}
