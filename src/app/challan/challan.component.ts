import { Component } from '@angular/core';

@Component({
  selector: 'app-challan',
  templateUrl: './challan.component.html',
  styleUrls: ['./challan.component.css']
})
export class ChallanComponent {
  challans = [
    {
      id: 1,
      vehicleNumber: 'KA01AB1234',
      ownerName: 'John Doe',
      violationType: 'Overspeeding',
      amount: 500
    },
    {
      id: 2,
      vehicleNumber: 'KA02CD5678',
      ownerName: 'Jane Doe',
      violationType: 'Jumping signal',
      amount: 300
    },
    // ...
  ];
  // newChallan = {
  //   id: 0,
  //   vehicleNumber: '',
  //   ownerName: '',
  //   violationType: '',
  //   amount: 0
  // };
  // addChallan() {
  //   this.newChallan.id = this.challans.length + 1;
  //   this.challans.push(this.newChallan);
  //   this.newChallan = {
  //     id: 0,
  //     vehicleNumber: '',
  //     ownerName: '',
  //     violationType: '',
  //     amount: 0
  //   };
  // }
  deleteChallan(id: number) {
    const index = this.challans.findIndex(challan => challan.id === id);
    if (index !== -1) {
      this.challans.splice(index, 1);
    }
  }
}
