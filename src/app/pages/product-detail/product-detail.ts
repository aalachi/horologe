import { Component, signal, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { CartService, Product } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetailComponent {
  cartService = inject(CartService);

  product: Product = {
    id: 'lune-perpetuelle-1',
    name: 'Lune Perpétuelle',
    ref: 'REF. HP-2024-LM',
    material: 'Platinum 950',
    size: '39mm',
    strapOrMovement: 'Alligator Leather, Midnight Blue',
    price: 68000,
    imageUrl: '/images/lune-perpetuelle-hero.jpg'
  };

  // State for accordion (null means all closed, otherwise index of open item)
  activeSpec = signal<number | null>(null);

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  toggleSpec(index: number) {
    if (this.activeSpec() === index) {
      this.activeSpec.set(null); // Close if already open
    } else {
      this.activeSpec.set(index); // Open clicked item
    }
  }

  scrollToInquiry() {
    const inquirySection = document.getElementById('inquiry-section');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
