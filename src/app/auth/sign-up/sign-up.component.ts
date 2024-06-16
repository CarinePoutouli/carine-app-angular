import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {LoginService} from "../../Service/Login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.loginService.registerForm;
  }

  OnSubmit() {
    let data = {
      first_name: this.form.value.nom,
      last_name: this.form.value.prenom,
      username: this.form.value.username,
      password: this.form.value.password,
      telephone: this.form.value.telephone,
      email: this.form.value.email
    };

    console.log(data);

    setTimeout(() => {
        this.loginService.register(data).subscribe(
          (res: any) => {
            this.router.navigate(['/auth/sign-in']);
          },
          (error: any) => {
            console.log(error);
          }
        );
      }, 2000);

  }

}
