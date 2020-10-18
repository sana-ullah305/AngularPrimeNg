import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

const routes: Routes = [
  // { path: 'app-home', component: HomeComponent },
  // { path: '', redirectTo: 'app-home', pathMatch: 'full' }, // redirect to `app-home`
  {
    path: 'app-payment-details', component: PaymentDetailsComponent
    // children: [
    //   {
    //     path: 'app-payment-detail-list', // child route path
    //     component: PaymentDetailListComponent, // child route component that the router renders
    //   },
    //   {
    //     path: 'app-payment-detail',
    //     component: PaymentDetailComponent, // another child route component that the router renders
    //   },
    // ],
  },
  { path: '', redirectTo: 'app-payment-details', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }