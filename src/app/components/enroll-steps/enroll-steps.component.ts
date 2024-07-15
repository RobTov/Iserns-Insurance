import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-enroll-steps',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './enroll-steps.component.html',
  styleUrl: './enroll-steps.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnrollStepsComponent { }
