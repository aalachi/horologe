import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  activeAccordion: number | null = null;

  toggleAccordion(index: number) {
    if (this.activeAccordion === index) {
      this.activeAccordion = null; // close if already open
    } else {
      this.activeAccordion = index; // open new one
    }
  }
}
