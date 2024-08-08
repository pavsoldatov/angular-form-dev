import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    IonicModule,
    FormsModule,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-form-test';
  password: string = '';
  logPasswordChange() {
    console.log('Password length:', this.password.length);
    console.log('Password:', this.password); // Logs the current password value
  }

  onSubmit() {
    console.log('Password submitted:', this.password.length);
  }
}
