
import {HttpClient} from '@angular/common/http'; // add this line
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClient, //add this line
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }