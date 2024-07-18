import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TranslationBase } from '../../interfaces/translation-base.model';

@Component({
  selector: 'app-about-description-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-description-list.component.html',
  styleUrl: './about-description-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutDescriptionListComponent {
  @Input({ required: true }) title: TranslationBase = { es: '', en: '' };
  @Input({ required: true }) list: TranslationBase[] = [];

  public languageService = inject(LanguageService);
}
