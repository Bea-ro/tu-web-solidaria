import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-pains',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './pains.component.html',
  styleUrl: './pains.component.css'
})
export class PainsComponent {}
