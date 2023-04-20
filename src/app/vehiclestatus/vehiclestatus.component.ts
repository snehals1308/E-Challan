import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-vehiclestatus',
  templateUrl: './vehiclestatus.component.html',
  styleUrls: ['./vehiclestatus.component.css']
})
export class VehiclestatusComponent {
  vehicleNumber!: string;
  captcha!: string;
  captchaImage!: string;
  challan: any;
  showResult = false;

  constructor(private http: HttpClient) {
    this.refreshCaptcha();
  }
  onSubmit(): void {
    // verify captcha
    if (this.captcha !== this.captchaImage) {
      alert('Incorrect captcha');
      return;
    }
    // send GET request to server to retrieve challan for this vehicle number
    this.http.get(`/api/challans?vehicleNumber=${this.vehicleNumber}`)
      .subscribe((response: any) => {
        this.challan = response[0];
        this.showResult = true;
      }, error => {
        this.showResult = true;
      });
  }

  refreshCaptcha(): void {
    // generate a random 4-digit number for captcha
    const captchaNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    this.captchaImage = captchaNumber.toString();
  }
}
