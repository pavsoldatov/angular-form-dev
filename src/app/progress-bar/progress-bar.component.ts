import { Component, Input } from '@angular/core';
import { PasswordStrength } from '../services/password.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css', '../../styles.css'],
})
export class ProgressBarComponent {
  @Input() strength: PasswordStrength = PasswordStrength.Empty;

  get colorClass() {
    switch (this.strength) {
      case PasswordStrength.Strong:
        return ['green', 'green', 'green'];
      case PasswordStrength.Medium:
        return ['yellow', 'yellow', 'gray'];
      case PasswordStrength.Weak:
        return ['red', 'gray', 'gray'];
      case PasswordStrength.TooShort:
        return ['red', 'red', 'red'];
      default:
        return ['gray', 'gray', 'gray'];
    }
  }
}
