import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactInfoComponent { }
