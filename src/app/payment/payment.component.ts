import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  challanNumber!: string;
  amount!: number;
  cardNumber!: string;
  expiryDate!: string;
  cvv!: string;
  paymentSuccessful: boolean = false;

  onSubmit() {
    // Here you can add any code to handle the payment process
    // For this example, we will just set paymentSuccessful to true
    this.paymentSuccessful = true;
  }
}
