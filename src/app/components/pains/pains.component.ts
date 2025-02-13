import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-pains',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './pains.component.html',
  styleUrl: './pains.component.css'
})
export class PainsComponent {
  @Input() sectionIntro: string = '';
  @Input() sectionAnswear: string = '';
}
