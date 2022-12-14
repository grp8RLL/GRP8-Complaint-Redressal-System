import { CustomersService } from './../../services/customers.service';
import { Customers } from './../../models/customers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customerregister.component.html',
  styleUrls: ['./customerregister.component.css'],
})
export class CustomerregisterComponent implements OnInit {
  customer: Customers = new Customers();
  constructor(private _customersService: CustomersService) {}

  ngOnInit(): void {}

  registerCustomer(): any {
    console.log('inside registerCustomer () !');

    this._customersService.registerCustomer(this.customer).subscribe(() => {
      alert('Successfully Registered !');
    });
  }
}
