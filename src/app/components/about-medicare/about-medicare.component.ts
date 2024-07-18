import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { AboutMedicare } from '../../interfaces/about-medicare.model';
import { AboutDescriptionListComponent } from '../../common/about-description-list/about-description-list.component';

@Component({
  selector: 'app-about-medicare',
  standalone: true,
  imports: [CommonModule, AboutDescriptionListComponent],
  templateUrl: './about-medicare.component.html',
  styleUrl: './about-medicare.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMedicareComponent {
  public languageService = inject(LanguageService);
  public medicareText = AboutMedicare;
}
