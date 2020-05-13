import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  txtloanamt = 0;
  txtint = 0;
  txtmonth = 0;
  txtfees = 0;
  txttax = 0;
  constructor() { }


  logForm() {
    console.log('Hi Got it');
  }


}
