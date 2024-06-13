import {Component, OnInit, signal} from '@angular/core';
import {StoreService} from "../../Service/JWT/store.service";
import {LoginService} from "../../Service/Login/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(
    private Store: StoreService,
    private loginservice: LoginService
  ) {
  }

    ngOnInit(): void {
      console.log(this.Store.decodeToken())
      console.log(this.Store.isExpire())

      this.getalluser()
    }

    getalluser(){
    setTimeout(
      () => {
        this.loginservice.getalluser().subscribe(
          (res: any) => {
            console.log(res);

          },
          (error: any) => {
            console.log(error);
          }
        );
      }, 2000
    )
    }
}
