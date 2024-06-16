import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import {CarListComponent} from "./body/car-list/car-list.component";
import {ReservationListComponent} from "./body/reservation-list/reservation-list.component";

const routes: Routes = [
  { path: '', component: AdministrationComponent,
  children:[
    {path:'car-list', component: CarListComponent},
    {path:'res-list', component: ReservationListComponent},
    {path:'', redirectTo: 'car-list', pathMatch: 'full'}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
