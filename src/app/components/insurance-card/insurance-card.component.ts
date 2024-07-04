import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-insurance-card',
  standalone: true,
  imports: [CommonModule],
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
    window.open(
      'https://www.healthsherpa.com/?_agent_id=pavel-iserns-mayo&ljs=es-MX',
      '_blank'
    );
  }
}
