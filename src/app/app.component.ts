import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './components/title/title.component';
import { InfoComponent } from './components/info/info.component';
import { PainsComponent } from './components/pains/pains.component';
import { pricesCards, reasonsCards } from './data/cardTexts';
import { CardText } from './components/card/card.model';
import { FooterComponent } from './components/footer/footer.component';
import { TwsCreatorComponent } from './components/tws-creator/tws-creator.component';
import { DonationsComponent } from './components/donations/donations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TitleComponent,
    InfoComponent,
    PainsComponent,
    FooterComponent,
    TwsCreatorComponent,
    DonationsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tu-web-solidaria';

  reasonsCards: CardText[][] = reasonsCards;
  pricesCards: CardText[][] = pricesCards;
  content: string = '';
}
