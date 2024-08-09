import { Injectable } from '@angular/core';

export enum PasswordStrength {
  Empty = 'Empty',
  TooShort = 'Too Short',
  Weak = 'Weak',
  Medium = 'Medium',
  Strong = 'Strong',
}

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  checkStrength(password: string): PasswordStrength {
    return checkPasswordStrength(password);
  }
}

function checkPasswordStrength(password: string): PasswordStrength {
  if (!password) return PasswordStrength.Empty;
  if (password.length < 8) return PasswordStrength.TooShort;

  const criteria = [
    /[a-zA-Z]/.test(password), // has letters
    /\d/.test(password), // has digits
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password), // has symbols
  ];

  const metCriteria = criteria.filter(Boolean).length;

  if (metCriteria === 3) return PasswordStrength.Strong;
  if (metCriteria === 2) return PasswordStrength.Medium;
  return PasswordStrength.Weak;
}
