import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = signal<string>(localStorage.getItem('lang') ?? 'es');
  public currentLanguageComputed = computed(this.currentLanguage)

  constructor() { }

  public setCurrentLanguage(language: string): void {
    localStorage.setItem('lang', language);
    this.currentLanguage.set(language);
  }

  
}
