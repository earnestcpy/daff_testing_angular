import {DemoComponent} from '../app/demo/demo.component';
import {FindProfileComponent} from '../app/find-profile/find-profile.component';
import { SalesPlanComponent } from '../app/sales-plan/sales-plan.component';



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: DemoComponent} ,
  {path: 'profile', component: FindProfileComponent}, 
  {path: 'demo', component: DemoComponent},
  {path: 'plan', component: SalesPlanComponent}
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
