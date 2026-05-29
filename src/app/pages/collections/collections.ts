import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

export interface CollectionWatch {
  id: string;
  name: string;
  spec: string;
  price: string;
  priceValue: number;
  material: string;
  movement: string;
  featured: boolean;
  newest: boolean;
  imageUrl: string;
  imageAlt: string;
}

@Component({
  selector: 'app-collections',
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './collections.html',
  styleUrl: './collections.css',
})
export class CollectionsComponent {
  // State
  activeMaterial = signal<string>('All');
  activeMovement = signal<string>('All');
  activeSort = signal<string>('Featured');

  readonly materials = ['All', 'Rose Gold', 'Platinum', 'Titanium', 'Steel'];
  readonly movements = ['All', 'Manual', 'Automatic'];
  readonly sortOptions = ['Featured', 'Newest', 'Price: High to Low', 'Price: Low to High'];

  // Watches sourced from Stitch project HOROLOGE — Collections screen
  readonly watches: CollectionWatch[] = [
    {
      id: 'chronographe-eternel',
      name: 'Chronographe Éternel',
      spec: 'Rose Gold, 42mm',
      price: '$42,500',
      priceValue: 42500,
      material: 'Rose Gold',
      movement: 'Manual',
      featured: true,
      newest: false,
      imageUrl: '/images/watch-chronographe-eternal.jpg',
      imageAlt: 'Chronographe Éternel — Minimalist studio shot of high-end luxury watches',
    },
    {
      id: 'lune-perpetuelle',
      name: 'Lune Perpétuelle',
      spec: 'Platinum, 39mm',
      price: '$68,000',
      priceValue: 68000,
      material: 'Platinum',
      movement: 'Automatic',
      featured: false,
      newest: true,
      imageUrl: '/images/watch-lune-perpetuelle.jpg',
      imageAlt: 'Lune Perpétuelle — pristine luxury timepiece featuring a minimalist white dial and silver casing',
    },
    {
      id: 'tourbillon-squelette-ti',
      name: 'Tourbillon Squelette',
      spec: 'Titanium, 44mm',
      price: '$115,000',
      priceValue: 115000,
      material: 'Titanium',
      movement: 'Manual',
      featured: true,
      newest: false,
      imageUrl: '/images/watch-tourbillon-titanium.jpg',
      imageAlt: 'Tourbillon Squelette Titanium — Detailed macro shot of an intricate watch movement dial',
    },
    {
      id: 'minimaliste-auto',
      name: 'Minimaliste Automatique',
      spec: 'Steel, 38mm',
      price: '$18,500',
      priceValue: 18500,
      material: 'Steel',
      movement: 'Automatic',
      featured: false,
      newest: true,
      imageUrl: '/images/watch-minimaliste.jpg',
      imageAlt: 'Minimaliste Automatique — Sleek modern dress watch with a deep black leather strap',
    },
  ];

  readonly filteredWatches = computed(() => {
    let result = [...this.watches];

    // Filter
    if (this.activeMaterial() !== 'All') {
      result = result.filter(w => w.material === this.activeMaterial());
    }
    if (this.activeMovement() !== 'All') {
      result = result.filter(w => w.movement === this.activeMovement());
    }

    // Sort
    switch (this.activeSort()) {
      case 'Price: High to Low':
        result.sort((a, b) => b.priceValue - a.priceValue);
        break;
      case 'Price: Low to High':
        result.sort((a, b) => a.priceValue - b.priceValue);
        break;
      case 'Newest':
        result.sort((a, b) => (a.newest === b.newest ? 0 : a.newest ? -1 : 1));
        break;
      case 'Featured':
      default:
        result.sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
        break;
    }

    return result;
  });

  updateMaterial(event: Event) {
    this.activeMaterial.set((event.target as HTMLSelectElement).value);
  }

  updateMovement(event: Event) {
    this.activeMovement.set((event.target as HTMLSelectElement).value);
  }

  updateSort(event: Event) {
    this.activeSort.set((event.target as HTMLSelectElement).value);
  }

  /** Returns the detail page route for a given watch id. Only lune-perpetuelle has a page for now. */
  getProductRoute(watchId: string): string {
    if (watchId === 'lune-perpetuelle') {
      return '/product/lune-perpetuelle';
    }
    return '/concierge'; // other watches: direct to concierge for inquiry
  }

  onInquire(watchId: string): void {
    // Handled by routerLink on each card
  }
}

