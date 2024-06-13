import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HeaderComponent } from './header/header.component';
import {ModalComponent} from "./componenent/modal/modal.component";
import { FooterComponent } from './footer/footer.component';
import { ComponenentComponent } from './componenent/componenent.component';
import { HomeComponent } from './componenent/home/home.component';
import { ContactComponent } from './componenent/contact/contact.component';
import { AboutComponent } from './componenent/about/about.component';
import {BannerComponent} from "./componenent/home/banner/banner.component";
import {SearchComponent} from "./componenent/home/search/search.component";
import {GalleryComponent} from "./componenent/home/gallery/gallery.component";


@NgModule({
  declarations: [
    ClientComponent,
    HeaderComponent,
    ModalComponent,
    BannerComponent,
    SearchComponent,
    GalleryComponent,
    FooterComponent,
    ComponenentComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
