import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChallanComponent } from './challan/challan.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentComponent } from './payment/payment.component';
import { VehiclestatusComponent } from './vehiclestatus/vehiclestatus.component';
import { HttpClientModule } from '@angular/common/http';
// import { AddchallanComponent } from './addchallan/addchallan.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ChallanComponent,
    VehicleComponent,
    FooterComponent,
    PaymentComponent,
    VehiclestatusComponent,
    // HttpClientModule
    // AddchallanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
