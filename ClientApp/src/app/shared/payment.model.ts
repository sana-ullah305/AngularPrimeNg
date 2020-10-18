import { Countries } from './countries.model';

export class Payment {
    PMId:number;
    CardOwnerName:string;
    CardNumber:string;
    ExpirationsDate:string;
    CVV:string;
    Country:string;
    State:string;
    Narrtions?:string;
    Rating?:number;
    PaymentDetailsMSCRows:Countries[]
}

// pmId:number;
//     cardOwnerName:string;
//     cardNumber:string;
//     expirationsDate:string;
//     cvv:string;
