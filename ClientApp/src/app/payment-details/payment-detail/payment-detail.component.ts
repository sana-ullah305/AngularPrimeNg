import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentService } from 'src/app/shared/payment.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {
 
  constructor(public paymentService: PaymentService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.paymentService.loadCountriesData();
    this.paymentService.loadStatesData();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.paymentService.formData = {
      PMId: 0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationsDate: '',
      CVV: '',
      Country:'',
      State:'',
      Narrtions:'',
      Rating:0,
      PaymentDetailsMSCRows:null
    }
  }

  onSubmit(form: NgForm) {
    debugger;
    if (this.paymentService.formData.PMId === null || this.paymentService.formData.PMId === 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.paymentService.formData.Country = form.value.Country.CountryName;
    this.paymentService.formData.State = form.value.State.StateName;
    this.paymentService.postPaymentDetail().subscribe(
      res => {
        this.messageService.add({ severity: 'success', summary: 'Saved', detail: 'Saved Successfully' });
        debugger;
        this.resetForm(form);
        this.paymentService.getAllPaymentDetails();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.paymentService.formData.Country = form.value.Country.CountryName;
    this.paymentService.formData.State = form.value.State.StateName;
    this.paymentService.putPaymentDetail().subscribe(
      res => {
        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Updated Successfully' });
        this.resetForm(form);
        this.paymentService.getAllPaymentDetails();
      },
      err => {
        console.log(err);
      }
    )
  }
  confirm() {
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }
  
}
