import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiandroFirstExpComponentComponent } from './ciandro-first-exp-component/ciandro-first-exp-component.component';
import { FirstComponentExpPipePipe } from './first-component-exp-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CiandroFirstExpComponentComponent,
    FirstComponentExpPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
