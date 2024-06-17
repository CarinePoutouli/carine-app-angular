import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {jwtInterceptor} from "./Service/intercepotor/jwt.interceptor";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(
      withInterceptors([
        jwtInterceptor
      ])
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
