import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-res',
  templateUrl: './add-res.component.html',
  styleUrl: './add-res.component.css'
})
export class AddResComponent {
  addResForm!: FormGroup;

  onSubmit() {

  }
}
