import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { EnrollStepsText } from '../../interfaces/enroll-steps.model';

@Component({
  selector: 'app-enroll-steps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enroll-steps.component.html',
  styleUrl: './enroll-steps.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnrollStepsComponent {
  public currentActiveStep = signal<number>(1);
  public languageService = inject(LanguageService);
  public enrollStepsText = EnrollStepsText;

  // ngOnInit(): void {
  //   setInterval(() => this.stepAnimationCounter(), 1200);
  // }

  // private stepAnimationCounter(): void {
  //   if (this.currentActiveStep() === 3) {
  //     this.currentActiveStep.set(1);
  //     return;
  //   }

  //   this.currentActiveStep.update((s) => (s += 1));
  // }
}
