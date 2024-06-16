import {Component, OnInit} from '@angular/core';
import {CarService} from "../../../Service/car/car.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit {
  cars: any = [];
  constructor(
    private carservice: CarService
  ) {
  }

  ngOnInit(): void {
    this.getCars()
  }
  getCars() {
    setTimeout(() => {
      this.carservice.getAllCars().subscribe(
        (res: any) => {
          console.log(res.image)
          this.cars = res;
        },
        (error: any) => {
          console.log(error);
        }
      )
    }, 2000);
  }

}
