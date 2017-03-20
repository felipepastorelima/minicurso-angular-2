import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SpinnerModule } from "app/spinner/spinner.module";
import { MenuModule } from "app/menu/menu.module";
import { AppRoutingModule } from "app/app-routing.module";
import { UserModule } from "app/user/user.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SpinnerModule,
    MenuModule,
    AppRoutingModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
