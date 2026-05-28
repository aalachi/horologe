import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-concierge',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './concierge.html',
  styleUrl: './concierge.css',
})
export class ConciergeComponent {
  // State for accordion (null means all closed, otherwise index of open item)
  activeFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    if (this.activeFaq() === index) {
      this.activeFaq.set(null); // Close if already open
    } else {
      this.activeFaq.set(index); // Open clicked item
    }
  }
}
