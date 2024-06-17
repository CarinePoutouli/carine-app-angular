import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormControlName, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";
const BASE_URL = environment.APIURL+'api/';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  CarCreeateForm() {
    return this.fb.group({

      model: ['', Validators.required],
      description: ['', Validators.required],
      price_per_day: ['', Validators.required],
      image: [''],
      created_by: [''],
    });
  }
  getAllCars() {
    return this.http.get(BASE_URL+'cars/');
  }

  addCar(data: any) {
    return this.http.post(BASE_URL+'cars/', data);
  }

  updateCar(id: any, data: any) {
    return this.http.put(BASE_URL+'cars/'+id+'/', data);
  }

  deleteCar(id: any) {
    return this.http.delete(BASE_URL+'cars/'+id+'/');
  }
}
