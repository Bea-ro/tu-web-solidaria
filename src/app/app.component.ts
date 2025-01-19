import { Component, OnInit } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { InfoComponent } from './components/info/info.component';
import { PainsComponent } from './components/pains/pains.component';
import { pricesCards, reasonsCards } from './data/cardTexts';
import { CardText, CardTextAndDetails } from './models/cardTexts..model';
import { FooterComponent } from './components/footer/footer.component';
import { TwsCreatorComponent } from './components/tws-creator/tws-creator.component';
import { DonationsComponent } from './components/donations/donations.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { Meta, Title } from '@angular/platform-browser';
import { ContactComponent } from './components/contact/contact.component';

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
    FaqsComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'tu-web-solidaria';

  public reasonsCards: CardText[][] = reasonsCards;
  public pricesCards: CardTextAndDetails[] = pricesCards;
  public pricesCardsTexts: CardText[][] = [];
  public content: string = '';

  constructor(
    private meta: Meta,
    private titleService: Title
  ) {
    this.pricesCards.map((priceCard) => this.pricesCardsTexts.push(priceCard.text));
  }
  ngOnInit() {
    this.titleService.setTitle('Tu web solidaria | Diseño web para ONG');
    this.meta.updateTag({
      name: 'description',
      content: 'Diseño web especializado en ONG. Colaborando con otras ONG. Infórmate.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'diseño web, web solidaria'
    });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }
}
