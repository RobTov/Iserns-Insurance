import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import emailjs, { send, type EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-insurance-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './insurance-card.component.html',
  styleUrl: './insurance-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsuranceCardComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) description: string = '';
  @Input({ required: true }) image: string = '';

  public languageService = inject(LanguageService);

  // UserInfo
  public zipCode: string = '';
  public fullName: string = '';
  public email: string = '';
  public phone: string = '';
  public gender: string = '';
  public birthDate: string = '';

  public navigateToExternalWebsite(): void {
    this.sendEmail();

    window.open(
      'https://www.healthsherpa.com/?_agent_id=pavel-iserns-mayo&ljs=es-MX',
      '_blank'
    );
  }

  public sendEmail(): void {
    emailjs.init(environment.EmailJSPublicKey);
    emailjs
      .send(environment.EmailJSService, environment.EmailJSTemplate, {
        email: this.email,
        full_name: this.fullName,
        zip_code: this.zipCode,
        phone: this.phone,
        gender: this.gender,
        birth_date: this.birthDate,
      })
      .then(
        () => {
          console.log('email sended');
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
