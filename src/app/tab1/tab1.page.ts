import { Shared } from './../shared';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  indata = {
    txtloanamt: '',
    txtint: '',
    txtmonth: '',
    txtfees: '',
    txttax: '',
  };
  iscalc: any = false;
  rate: any;
  principal: any;
  nterms: any;
  ratepow: any;
  resultEMI: any;
  resultLoan: any;
  resultExtra: any;
  resultFees: any;
  resultRepay: any;
  resultExtraPay: any;
  constructor(public toastController: ToastController, private shared: Shared) {

  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      position: 'middle',
      duration: 2000
    });
    toast.present();
  }

  logForm() {
    console.log(this.indata);
    if (Number(this.indata.txtloanamt) <= 0) {
      this.presentToast('Loan Amount must be greater than zero');
      return false;
    } else if (Number(this.indata.txtint) <= 0) {
      this.presentToast('Interest must be greater than zero');
      return false;
    } else if (Number(this.indata.txtmonth) <= 0) {
      this.presentToast('Loan Tenure must be greater than zero');
      return false;
    }

    this.rate = Number((Number(this.indata.txtint) / 12 / 100).toFixed(5));
    console.log(this.rate);
    this.principal = Number(this.indata.txtloanamt);
    this.nterms = Number(this.indata.txtmonth);
    this.ratepow = Math.pow((1 + this.rate), this.nterms);
    console.log(this.ratepow);
    this.resultEMI = Number((this.principal * this.rate * (this.ratepow / (this.ratepow - 1))).toFixed(2));

    this.resultLoan = this.principal.toFixed(2);
    this.resultExtra = Number(((this.resultEMI * this.nterms) - this.principal).toFixed(2));
    this.resultFees = Number((((this.resultExtra + Number(this.indata.txtfees)) / 100) * Number(this.indata.txttax)).toFixed(2));
    this.resultRepay = (this.principal + this.resultExtra + this.resultFees + Number(this.indata.txtfees)).toFixed(2);
    this.resultExtraPay = (Number(this.resultRepay) - Number(this.resultLoan)).toFixed(2);
    this.iscalc = true;

    const sharedate = { sterms: this.nterms, srate: this.rate, semi: this.resultEMI, sLoan: this.resultLoan, stax : this.indata.txttax };
    this.shared.setemiDtl(sharedate);
  }


}
