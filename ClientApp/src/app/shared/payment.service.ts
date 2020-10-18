import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Countries } from './countries.model';
import { Payment } from './payment.model';
import { States } from './states.model';


@Injectable({
  providedIn: 'root'
})
export class PaymentService implements IPaymentService {
  paymentDetailsList: Payment[];
  countries: Countries[];
  states: States[];
  selectedCountry: Countries;
  selectedState: States;
  msSelectedCountries:Countries[];
  formData: Payment = {
    CVV: null,
    CardNumber: null,
    CardOwnerName: null,
    ExpirationsDate: null,
    PMId: 0,
    Country: null,
    State: null,
    Narrtions:null,
    Rating:0,
    PaymentDetailsMSCRows:null
  };

  constructor(private http: HttpClient) { }
  getAllPaymentDetails() {
    this.http.get<Payment[]>(environment.baseURL + 'PaymentDetail').toPromise().then(res => this.paymentDetailsList = res);
  }
  postPaymentDetail() {
    console.log(this.formData);
    debugger;
    return this.http.post(environment.baseURL + 'PaymentDetail', this.formData);
  }

  putPaymentDetail() {
    return this.http.put(environment.baseURL + 'PaymentDetail/' + this.formData.PMId, this.formData);
  }
  deletePaymentDetail(id) {
    return this.http.delete(environment.baseURL + 'PaymentDetail/' + id);
  }
  loadCountriesData() {
    this.countries = [
      { CountryName: 'Select Country', CountryCode: null, Id: 0,PaymentDetailId:0 },
      { CountryName: 'Pakistan', CountryCode: 'PK', Id: 0,PaymentDetailId:0 },
      { CountryName: 'Afganistan', CountryCode: 'AFG', Id: 0,PaymentDetailId:0 },
      { CountryName: 'Dubai', CountryCode: 'UAE', Id: 0,PaymentDetailId:0 },
      { CountryName: 'United States of America', CountryCode: 'USA', Id: 0,PaymentDetailId:0 },
    ];
  }
  loadStatesData() {
    this.states = [
      { StateName: 'Select State', StateCode: null, CountryCode: null },
      { StateName: 'Sind', StateCode: 'S', CountryCode: 'PK' },
      { StateName: 'Punjab', StateCode: 'P', CountryCode: 'PK' },
      { StateName: 'Khayber', StateCode: 'K', CountryCode: 'PK' },
      { StateName: 'Balochistan', StateCode: 'B', CountryCode: 'PK' },

    ];
  }
}

interface IPaymentService {
  paymentDetailsList: Payment[];
  getAllPaymentDetails();
}
