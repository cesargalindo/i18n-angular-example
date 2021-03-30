import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class LocaleService {

  private _locale: string;

  constructor() { }

  set locale(value: string) {
    this._locale = value;
  }
  get locale(): string {
    return this._locale || 'en-us';
  }
}
