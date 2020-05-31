import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, concat } from 'rxjs';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  url = 'https://api.exchangeratesapi.io/latest';
  results: Observable<any>;
  data: any;

  currencyfrom = 'INR';
  currencyto = 'USD';
  txtfrom = 1;
  txtto = 1;
  lastupdated: any;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getCurrencyJson()
      .subscribe(data => {
        // this.data = JSON.stringify(data);
        this.data = data as any;
        // console.log(this.data.date);
        this.lastupdated = this.data.date;
        this.calculateRates('From');
      });
  }

  private getCurrencyJson(): Observable<object> {
    // Prepare the request
    return this.http.get(this.url);
  }


  onSelectChangeFrom(local) {
    // console.log(local.target.value);
    // console.log(this.data.rates[local.target.value]);
    this.currencyfrom = local.target.value;
    this.calculateRates('From');
  }

  onSelectChangeTo(local) {
    // console.log(local.target.value);
    this.currencyto = local.target.value;
    console.log(this.data.rates[local.target.value]);
    this.calculateRates('To');
  }

  onChangeFrom(value) {
    this.calculateRates('From');

  }

  onChangeTo(value) {
    this.calculateRates('To');
  }

  calculateRates(callfrom) {
    let valueFrom = Number(this.data.rates[this.currencyfrom]);
    let valueTo = Number(this.data.rates[this.currencyto]);
    let CRatio = 0;
    if (this.currencyfrom === 'EUR') {
      valueFrom = 1;
    }
    if (this.currencyto === 'EUR') {
      valueTo = 1;
    }
    if (callfrom === 'From') {
      CRatio = Number(Number((valueTo / valueFrom)).toFixed(4));
      this.txtto = Number(Number(CRatio * Number(this.txtfrom)).toFixed(4));
    } else {
      CRatio = Number(Number((valueFrom / valueTo)).toFixed(4));
      this.txtfrom = Number(Number(CRatio * Number(this.txtto)).toFixed(4));
    }

  }


  // return this.http.get(this.url).pipe(
  //   map(results => results)).subscribe(
  //     data => {
  //       // this.data = JSON.stringify(data);
  //       this.data = data as any;
  //     });

}
