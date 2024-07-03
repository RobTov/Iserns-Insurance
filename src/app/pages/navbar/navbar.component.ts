import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { RouterModule } from '@angular/router';
import { NavbarText } from '../../interfaces/navbar.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  public languageService = inject(LanguageService);
  public navbarText = NavbarText;

  public setLanguage(language: string): void {
    this.languageService.setCurrentLanguage(language);
  }
}
