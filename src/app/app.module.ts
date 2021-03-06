import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FindProfileComponent } from "./find-profile/find-profile.component";
import { DemoComponent } from "./demo/demo.component";
import { MenuComponent } from "./menu/menu.component";
import { SalesPlanComponent } from "./sales-plan/sales-plan.component";
import { SalesFormComponent } from "./sales-form/sales-form.component";
import { BillComponent } from "./bill/bill.component";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FindProfileComponent,
    DemoComponent,
    MenuComponent,
    SalesPlanComponent,
    SalesFormComponent,
    BillComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
