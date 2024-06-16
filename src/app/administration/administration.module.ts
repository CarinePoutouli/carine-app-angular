import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { CarListComponent } from './body/car-list/car-list.component';
import { ReservationListComponent } from './body/reservation-list/reservation-list.component';
import { AddCarComponent } from './modal/add-car/add-car.component';
import { AddResComponent } from './modal/add-res/add-res.component';


@NgModule({
  declarations: [
    AdministrationComponent,
    BodyComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    CarListComponent,
    ReservationListComponent,
    AddCarComponent,
    AddResComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
