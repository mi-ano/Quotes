import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDescriptionComponent } from './quote-description/quote-description.component';
import { BackgroungColorDirective } from './backgroung-color.directive';
import { BackgroundColorDirective } from './background-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDescriptionComponent,
    BackgroungColorDirective,
    BackgroundColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
