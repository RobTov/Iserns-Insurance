import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { InsuranceCardComponent } from '../../components/insurance-card/insurance-card.component';
import { InsuranceCards } from '../../interfaces/insurance-cards.model';
import { LanguageService } from '../../services/language.service';
import { EnrollStepsComponent } from '../../components/enroll-steps/enroll-steps.component';
import { TestimonialCardsText } from '../../interfaces/testimonial-cards.model';
import { TestimonialCardComponent } from '../../components/testimonial-card/testimonial-card.component';
import { ContactInfoComponent } from '../../components/contact-info/contact-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    InsuranceCardComponent,
    EnrollStepsComponent,
    TestimonialCardComponent,
    ContactInfoComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public cardItems = InsuranceCards;
  public languageService = inject(LanguageService);
  public testimonialText = TestimonialCardsText;
}
