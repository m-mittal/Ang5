import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appNameValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true}]
})
export class NameValidatorDirective implements Validator {
  b: Boolean = true;

  validate(input: FormControl): ValidationErrors{
    const message = {
      'message': 'error in name'
    };
    this.b = /[0-9]/.test(input.value);
    if ( this.b === true ){
      // console.log(message);
      return message;
    }
    return null;
  }
}
