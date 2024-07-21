import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { HomeHeroText } from '../../interfaces/home-hero.model';
import { RouterModule } from '@angular/router';
import { InsuranceCardComponent } from '../insurance-card/insurance-card.component';
import { InsuranceCards } from '../../interfaces/insurance-cards.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, InsuranceCardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  public languageService = inject(LanguageService);
  public heroText = HomeHeroText;
  public insuranceCardsText = InsuranceCards;
}
