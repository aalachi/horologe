import { Injectable, signal, computed } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  ref: string;
  material: string;
  size: string;
  strapOrMovement: string;
  price: number;
  imageUrl: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // The core state holding all items in the cart
  readonly items = signal<CartItem[]>([]);

  // Computed signal for the total number of items
  readonly cartCount = computed(() => {
    return this.items().reduce((total, item) => total + item.quantity, 0);
  });

  // Computed signal for the total price of all items
  readonly cartTotal = computed(() => {
    return this.items().reduce((total, item) => total + (item.product.price * item.quantity), 0);
  });

  addToCart(product: Product) {
    this.items.update(currentItems => {
      const existingItemIndex = currentItems.findIndex(item => item.product.id === product.id);
      
      if (existingItemIndex >= 0) {
        // If item exists, create a new array with the updated quantity for that item
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        return updatedItems;
      } else {
        // If item is new, add it to the array
        return [...currentItems, { product, quantity: 1 }];
      }
    });
  }

  removeFromCart(productId: string) {
    this.items.update(currentItems => currentItems.filter(item => item.product.id !== productId));
  }

  updateQuantity(productId: string, diff: number) {
    this.items.update(currentItems => {
      return currentItems.map(item => {
        if (item.product.id === productId) {
          const newQuantity = Math.max(1, item.quantity + diff); // Prevent quantity < 1
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  }
}
