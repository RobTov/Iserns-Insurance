import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WhoWeAre } from '../../interfaces/who-we-are.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhoWeAreComponent {
  public languageService = inject(LanguageService);
  public text = WhoWeAre;
}
