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
  ) {
  }

    ngOnInit(): void {
    }


}
