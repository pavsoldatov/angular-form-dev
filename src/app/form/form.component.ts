import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { CommonModule } from '@angular/common';
import {
  PasswordStrengthService,
  PasswordStrength,
} from '../services/password.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, ProgressBarComponent],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css', '../../styles.css'],
})
export class FormComponent {
  password: string = '';
  passwordStrength: PasswordStrength = PasswordStrength.Empty;
  errorMessage: string = '';

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  onPasswordChange() {
    this.passwordStrength = this.passwordStrengthService.checkStrength(
      this.password
    );
    console.log('Password:', this.password);
  }

  onSubmit() {
    this.password = '';
  }

  getPasswordStrength(strength: PasswordStrength): string {
    return strength === PasswordStrength.Empty ? '' : strength.toLowerCase();
  }
}
