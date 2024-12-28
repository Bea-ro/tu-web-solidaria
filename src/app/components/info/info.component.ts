import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ButtonComponent } from '../button/button.component';
import { CardText } from '../card/card.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CardComponent, ButtonComponent, CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  @Input() infoIntro: string = '';
  @Input() infoAnswear: string = '';
  @Input() cardTexts: CardText[][] = [];
  @Input() content: string = '';
}
