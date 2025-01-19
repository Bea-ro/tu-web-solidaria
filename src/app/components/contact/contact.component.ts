import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() sectionIntro: string = '';
  @Input() sectionAnswear: string = '';
}
