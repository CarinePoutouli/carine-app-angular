import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CarService} from "../../../Service/car/car.service";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent implements OnInit {
  addCarForm!: FormGroup;

  constructor(
    private carservice: CarService
  ) {
  }

  ngOnInit(): void {
    this.addCarForm = this.carservice.CarCreeateForm();
    console.log(this.addCarForm);
  }

  onSubmit() {
    this.carservice.addCar(this.addCarForm.value).subscribe(
      (res: any) => {
        console.log(res);
      },
      (error: any) => {
        console.log(error);
      }
    )

  }

}
