import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Countries } from 'src/app/shared/countries.model';
import { Payment } from 'src/app/shared/payment.model';
import { PaymentService } from 'src/app/shared/payment.service';
import { States } from 'src/app/shared/states.model';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.css']
})
export class PaymentDetailListComponent implements OnInit {
  // selectedCountry: Countries;
  // selectedState: States;

  @ViewChild('dt') table: Table;
  selectedPayments: Payment[];
  loading: boolean = true;
  constructor(public paymentService: PaymentService, private messageService: MessageService,
    private confirmationService: ConfirmationService) { }


  ngOnInit(): void {
    this.paymentService.getAllPaymentDetails();
    this.loading = false;
  }

  populateForm(pd: Payment) {
    debugger;
    this.paymentService.selectedCountry = null;
    this.paymentService.selectedState = null;

    this.paymentService.formData = Object.assign({}, pd);
    console.log(this.paymentService.formData);

    this.paymentService.countries.forEach(element => {
      if (this.paymentService.formData.Country.toLowerCase().toString() === element.CountryName.toLowerCase().toString())
        this.paymentService.selectedCountry = element;
      });
    this.paymentService.states.forEach(element => {
      if (element.StateName === this.paymentService.formData.State)
        this.paymentService.selectedState = element;
    });
    console.log(this.paymentService.selectedCountry);
    console.log(this.paymentService.selectedState);

  }

  deleteRecord(PMId) {
      this.paymentService.deletePaymentDetail(PMId)
        .subscribe(res => {
          debugger;
          this.paymentService.getAllPaymentDetails();
          this.messageService.clear();
          this.messageService.add({ severity: 'warn', summary: 'Deleted', detail: 'Deleted successfully' });
          // this.toastr.warning('Deleted successfully', 'Payment Detail Register');
        },
          err => {
            debugger;
            console.log(err);
          })
  }
  onDelete(PMId) {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.messageService.clear();
          this.deleteRecord(PMId);
        },
        reject: () => {
          this.messageService.clear();
            this.messageService.add({severity:'info', summary:'Rejected', detail:'You have Rejected'});
        },
    });
  }

  
}
