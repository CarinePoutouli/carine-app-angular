import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import {HomeComponent} from "./componenent/home/home.component";
import {ContactComponent} from "./componenent/contact/contact.component";
import {AboutComponent} from "./componenent/about/about.component";

const routes: Routes = [
  { path: '', component: ClientComponent,
    children:
      [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path:'home', component: HomeComponent},
        {path:'contact', component: ContactComponent},
        {path:'about', component: AboutComponent},

      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
