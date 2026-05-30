import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {
  // Image sourced from Stitch project HOROLOGE — Boutique Homepage hero
  readonly heroImage = '/images/hero.jpg';

  scrollToDiscover(): void {
    const target = document.getElementById('discover');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
