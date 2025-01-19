import { Component } from '@angular/core';

@Component({
  selector: 'app-donations',
  standalone: true,
  imports: [],
  templateUrl: './donations.component.html',
  styleUrl: './donations.component.css'
})
export class DonationsComponent {
  textVisiblity: boolean = true;
  infoButtonText: string = '+Info';

  showText() {
    this.textVisiblity = !this.textVisiblity;
    if (this.infoButtonText === '+Info') {
      this.infoButtonText = '-Info';
    } else {
      this.infoButtonText = '+Info';
    }
  }
}
