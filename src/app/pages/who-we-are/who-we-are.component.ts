import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhoWeAreComponent { }
