import { AbstractControl } from '@angular/forms';

export const EMAIL_VALIDATOR = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]+$';
export const PASSWORD_VALIDATOR = /^(?!.* )(?=.*[A-Z]).{8,}$/;
export const OTP_VALIDATOR = '^[0-9]{6}$';
// export const PHONE_VALIDATOR = '[+]?[0-9]{5,15}$';
// Validator permettant d'ignorer les espaces, et les parenthèses
export const PHONE_VALIDATOR = '^[ +()]*([0-9][ ()]*){5,15}$';
