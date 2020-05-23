import { Component } from '@angular/core';
import { Shared } from './../shared';

export interface PayBreak {
  emicount: any;
  principal: any;
  interest: any;
  totalpay: any;
  balance: any;
  loadpaid: any;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

  payarray: PayBreak[] = [];
  constructor(private shared: Shared) {
  }

  ionViewDidEnter() {
    const emidtl = this.shared.getemiDtl();

    if (emidtl != null) {
      let newLoanAmount = emidtl.sLoan;
      this.payarray = [];
      for (let i = 1; i <= emidtl.sterms; i++) {
        const calcinterest = Number(emidtl.srate * newLoanAmount).toFixed(2);
        const paybreak = {} as PayBreak;
        paybreak.emicount = i;
        paybreak.principal = Number(Number(emidtl.semi - Number(calcinterest)).toFixed(2));
        paybreak.interest = calcinterest;
        newLoanAmount = Number(Number(newLoanAmount - paybreak.principal).toFixed(2));
        paybreak.totalpay = emidtl.semi;
        paybreak.balance = newLoanAmount;
        paybreak.loadpaid = Number(100 - ((newLoanAmount / emidtl.sLoan) * 100)).toFixed(2);
        this.payarray.push(paybreak);
      }
    }
    // console.log(this.payarray);
  }

}
