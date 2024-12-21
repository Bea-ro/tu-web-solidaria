import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ButtonComponent } from '../button/button.component';
import { cardTexts } from '../../data/cardTexts';
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
  cardTexts: CardText[][] = cardTexts;
}
