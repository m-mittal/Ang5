import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements Validator{
  message;
  validate(input: FormControl): ValidationErrors{
    this.message = {
      'message': 'error in email'
    };
    if ( /^[A-z]+[0-9 \- \_]*(@)[A-z]+(\.)[A-z]+/.test(input.value)){
      return null;
    }
    // console.log(this.message);
    return this.message;

  }
}
