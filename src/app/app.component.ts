import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../styles.css'],
})
export class AppComponent {
  title = 'angular-form-test';
}
