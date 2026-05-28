import { Component } from '@angular/core';

export interface WatchSpec {
  label: string;
  value: string;
}

@Component({
  selector: 'app-cards-two',
  templateUrl: './cards-two.html',
  styleUrl: './cards-two.css',
})
export class CardsTwoComponent {
  // Image sourced from Stitch project HOROLOGE — Boutique Homepage, Featured Timepiece section
  readonly imageUrl = '/images/watch-tourbillon-squelette.jpg';

  readonly specs: WatchSpec[] = [
    { label: 'Calibre',       value: 'HR-02 Manual' },
    { label: 'Power Reserve', value: '72 Hours' },
    { label: 'Case',          value: 'Platinum 950' },
  ];

  onInquireClick(): void {
    // TODO: open inquiry modal / route to concierge
    console.log('Inquire Now clicked');
  }
}
