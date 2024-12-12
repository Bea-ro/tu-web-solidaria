import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CardComponent, ButtonComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {}
