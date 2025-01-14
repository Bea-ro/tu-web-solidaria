import { Component } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { InfoComponent } from './components/info/info.component';
import { PainsComponent } from './components/pains/pains.component';
import { pricesCards, reasonsCards } from './data/cardTexts';
import { CardText, CardTextAndDetails } from './models/cardTexts..model';
import { FooterComponent } from './components/footer/footer.component';
import { TwsCreatorComponent } from './components/tws-creator/tws-creator.component';
import { DonationsComponent } from './components/donations/donations.component';
import { FaqsComponent } from './components/faqs/faqs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TitleComponent,
    InfoComponent,
    PainsComponent,
    FooterComponent,
    TwsCreatorComponent,
    DonationsComponent,
    FaqsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tu-web-solidaria';

  public reasonsCards: CardText[][] = reasonsCards;
  public pricesCards: CardTextAndDetails[] = pricesCards;
  public pricesCardsTexts: CardText[][] = [];
  public content: string = '';

  constructor() {
    this.pricesCards.map((priceCard) => this.pricesCardsTexts.push(priceCard.text));
  }
}
