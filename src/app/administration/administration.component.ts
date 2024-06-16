import {Component, OnInit} from '@angular/core';
import {CarService} from "../Service/car/car.service";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.css'
})
export class AdministrationComponent implements OnInit {
  cars: any = [];

  constructor(
    private carservice: CarService,
  ) {
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    setTimeout(() => {
      this.carservice.getAllCars().subscribe(
        (res: any) => {
          console.log(res);
          this.cars = res;
        },
        (error: any) => {
          console.log(error);
        }
      )
    }, 2000);
  }


}
