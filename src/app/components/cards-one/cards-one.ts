import { Component, ElementRef, signal, ViewChild } from '@angular/core';

export interface WatchCard {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
}

@Component({
  selector: 'app-cards-one',
  templateUrl: './cards-one.html',
  styleUrl: './cards-one.css',
})
export class CardsOneComponent {
  // Watch images sourced from Stitch project HOROLOGE — Boutique Homepage, New Arrivals section
  readonly watches: WatchCard[] = [
    {
      id: 'chronographe-bleu',
      name: 'Chronographe Bleu',
      price: '$24,500',
      imageUrl: '/images/watch-chronographe-bleu.jpg',
      imageAlt: 'Chronographe Bleu — silver luxury watch with blue dial on white marble plinth',
    },
    {
      id: 'classique-or-rose',
      name: 'Classique Or Rose',
      price: '$18,200',
      imageUrl: '/images/watch-classique-or-rose.jpg',
      imageAlt: 'Classique Or Rose — rose gold dress watch with brown leather strap on concrete',
    },
    {
      id: 'aero-black-ceramic',
      name: 'Aero Black Ceramic',
      price: '$15,800',
      imageUrl: '/images/watch-aero-black-ceramic.jpg',
      imageAlt: 'Aero Black Ceramic — matte black tactical sports watch on dark slate',
    },
    {
      id: 'etoile-diamant',
      name: 'Étoile Diamant',
      price: '$32,000',
      imageUrl: '/images/watch-etoile-diamant.jpg',
      imageAlt: "Étoile Diamant — diamond-encrusted women's watch with mother-of-pearl dial on white silk",
    },
  ];

  @ViewChild('carouselRef') carouselRef!: ElementRef<HTMLElement>;

  scrollLeft(): void {
    if (this.carouselRef) {
      this.carouselRef.nativeElement.scrollBy({ left: -350, behavior: 'smooth' });
    }
  }

  scrollRight(): void {
    if (this.carouselRef) {
      this.carouselRef.nativeElement.scrollBy({ left: 350, behavior: 'smooth' });
    }
  }

  /** Becomes true once the user starts scrolling — hides the scroll hint */
  hasScrolled = signal(false);

  onCarouselScroll(): void {
    if (!this.hasScrolled()) {
      this.hasScrolled.set(true);
    }
  }
}
