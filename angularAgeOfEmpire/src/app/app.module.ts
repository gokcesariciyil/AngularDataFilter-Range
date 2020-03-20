import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { UnitsComponent } from './components/units/units.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { UnitDetailComponent } from './components/unit-detail/unit-detail.component';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnitsComponent,
    HeaderComponent,
    UnitDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    Ng5SliderModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
