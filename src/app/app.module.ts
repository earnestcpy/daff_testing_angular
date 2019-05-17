import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindProfileComponent } from './find-profile/find-profile.component';
import { DemoComponent } from './demo/demo.component';
import { MenuComponent } from './menu/menu.component';
import { SalesPlanComponent } from './sales-plan/sales-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    FindProfileComponent,
    DemoComponent,
    MenuComponent,
    SalesPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
