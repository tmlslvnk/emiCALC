import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Shared {
  emidtl: any;
  constructor() {
    this.emidtl = null;
  }

  setemiDtl(emidtl) {
    this.emidtl = emidtl;
  }

  getemiDtl() {
    return this.emidtl;
  }



}
