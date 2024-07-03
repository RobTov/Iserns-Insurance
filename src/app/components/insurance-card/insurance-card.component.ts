import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-insurance-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insurance-card.component.html',
  styleUrl: './insurance-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsuranceCardComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) description: string = '';
  @Input({ required: true }) image: string = '';
}
