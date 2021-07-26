import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Prime Ng Imports
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';

import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';
import { PaymentService } from './shared/payment.service';
// import {EditorModule} from 'primeng/editor';
import {InputMaskModule} from 'primeng/inputmask';
import {PasswordModule} from 'primeng/password';
import { ConfirmationService, MessageService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {RatingModule} from 'primeng/rating';
import {MultiSelectModule} from 'primeng/multiselect';
import { TemplateComponent } from './template/template.component';
import { TemplateListComponent } from './template/template-list/template-list.component';
import { KeywordListComponent } from './template/keyword-list/keyword-list.component';
import { KeywordElementListComponent } from './template/keyword-element-list/keyword-element-list.component';
import { TemplateService } from './template/shared/template.service';
import {DialogModule} from 'primeng/dialog';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent,
    //Sir Faheem
    TemplateComponent,
    TemplateListComponent,
    KeywordListComponent,
    KeywordElementListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    //Prime Ng Modules
    AccordionModule,
    TableModule,
    ButtonModule,
    AutoCompleteModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    CalendarModule, ToastModule,
    // EditorModule,
    InputMaskModule,
    PasswordModule,
    ConfirmDialogModule,
    RatingModule,
    MultiSelectModule,
    DialogModule
  ],
  providers: [MessageService,ConfirmationService,
  //User Defined Services
  PaymentService,
  TemplateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
