import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChallanComponent } from './challan/challan.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { PaymentComponent } from './payment/payment.component';
import { VehiclestatusComponent } from './vehiclestatus/vehiclestatus.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'vehicle-details', component: VehicleDetailsComponent },
  // { path: 'payment', component: PaymentComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'challan', component:ChallanComponent },
  { path: 'vehicle', component:VehicleComponent },
  { path: 'vehiclestatus', component:VehiclestatusComponent},
  { path: 'payment', component:PaymentComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
