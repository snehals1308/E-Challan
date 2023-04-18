import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicleList: any[] = [
    { id: 1, regNo: 'ABC123', type: 'Car', make: 'Toyota', model: 'Corolla' },
    { id: 2, regNo: 'DEF456', type: 'Truck', make: 'Volvo', model: 'FH16' },
    { id: 3, regNo: 'GHI789', type: 'Motorcycle', make: 'Honda', model: 'CBR600RR' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
