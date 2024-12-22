import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './components/title/title.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoComponent } from './components/info/info.component';
import { PainsComponent } from './components/pains/pains.component';
import { pricesCards, reasonsCards } from './data/cardTexts';
import { CardText } from './components/card/card.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleComponent, NavbarComponent, InfoComponent, PainsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tu-web-solidaria';

  reasonsCards: CardText[][] = reasonsCards;
  pricesCards: CardText[][] = pricesCards;
}
