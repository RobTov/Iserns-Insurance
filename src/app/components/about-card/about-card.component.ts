import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutCardComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) description: string = '';
  @Input({ required: true }) image: string = '';
}
