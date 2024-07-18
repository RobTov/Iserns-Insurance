import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AboutCardComponent } from '../../components/about-card/about-card.component';
import { AboutCardsModel } from '../../interfaces/about-cards-model';
import { LanguageService } from '../../services/language.service';
import { AboutMedicareComponent } from '../../components/about-medicare/about-medicare.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, AboutCardComponent, AboutMedicareComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent {
  public aboutCardsContent = AboutCardsModel;
  public languageService = inject(LanguageService);
}
