import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
declare var jQuery: any;

import { AppRoutingModule ,RoutingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import { BoardService } from './board.service';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
