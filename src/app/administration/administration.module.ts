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


@NgModule({
  declarations: [
    AdministrationComponent,
    BodyComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    CarListComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
