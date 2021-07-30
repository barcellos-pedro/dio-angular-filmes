import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidarCamposService {

  constructor() { }

  hasErrorValidate(control: AbstractControl, errorName: string): boolean {
    return (control.touched || control.dirty) && this.hasError(control, errorName);
  }

  hasError(control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName);
  }
}
