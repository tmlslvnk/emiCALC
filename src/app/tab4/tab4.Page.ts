import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})


export class Tab4Page {
  indata = {
    frmDate: new Date().toISOString(),
    toDate: new Date().toISOString()
  };
  iscalc: any = false;
  resultyears: any;
  resultmonths: any;
  resultdays: any;

  ryears: any;
  rmonths: any;
  rweeks: any;
  rdays: any;
  rhours: any;
  rminutes: any;

  constructor() {

  }

  datesubmit() {
    console.log(this.indata);

    const frmdate = moment(this.indata.frmDate);
    const todate = moment(this.indata.toDate);

    this.ryears = todate.diff(frmdate, 'years');
    this.rmonths = todate.diff(frmdate, 'months');
    this.rweeks = todate.diff(frmdate, 'weeks');

    this.rdays = todate.diff(frmdate, 'days');
    this.rhours = todate.diff(frmdate, 'hours');
    this.rminutes = todate.diff(frmdate, 'minutes');

    // console.log(todate.diff(frmdate, 'days'));
    // console.log(todate.diff(frmdate, 'months'));

    this.resultyears = todate.diff(frmdate, 'years');
    // console.log(resultyears);
    // console.log(todate.diff(frmdate, 'weeks'));
    frmdate.add(this.resultyears, 'years');
    this.resultmonths = todate.diff(frmdate, 'months');
    // console.log(resultmonths);
    frmdate.add(this.resultmonths, 'months');
    this.resultdays = todate.diff(frmdate, 'days');
    // console.log(resultdays);
    this.iscalc = true;
  }

}
