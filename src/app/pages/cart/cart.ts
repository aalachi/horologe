import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartComponent {
  cartService = inject(CartService);

  removeItem(productId: string) {
    this.cartService.removeFromCart(productId);
  }

  updateQty(productId: string, diff: number) {
    this.cartService.updateQuantity(productId, diff);
  }
}
