import { Component } from '@angular/core';
import { faqs } from '../../data/faqs';
import { CommonModule } from '@angular/common';
import { Faqs } from '../../models/faqs.model';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
  public faqs: Faqs[] = faqs;
}
