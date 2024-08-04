import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-insurance-card2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insurance-card2.component.html',
  styleUrl: './insurance-card2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsuranceCard2Component {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) image: string = '';
}
